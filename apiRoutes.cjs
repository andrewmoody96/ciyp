const express = require("express");
require("dotenv");
const { Buffer } = require("buffer");
const router = express.Router();

const { google } = require("googleapis");
const GCAL_ID = process.env.REACT_APP_GCAL_ID;

const GoogleServiceAccountKeys = JSON.parse(
  Buffer.from(process.env.GOOGLE_KEYS, "base64").toString()
);

const jwt = new google.auth.JWT(
  GoogleServiceAccountKeys.client_email,
  null,
  GoogleServiceAccountKeys.private_key,
  [
    "https://www.googleapis.com/auth/calendar.events.readonly",
    "https://www.googleapis.com/auth/calendar.readonly",
  ]
);

const calendar = google.calendar({
  version: "v3",
  project: process.env.GOOGLE_PROJECT_NUMBER,
  auth: jwt,
});

// GCal API Route
router.get("/shows", (req, res) => {
  async function main() {
    const auth = new google.auth.GoogleAuth({
      // Scopes can be specified either as an array or as a single, space-delimited string.
      credentials: GoogleServiceAccountKeys,
      scopes: [
        "https://www.googleapis.com/auth/calendar.events.readonly",
        "https://www.googleapis.com/auth/calendar.readonly",
      ],
    });

    // Acquire an auth client, and bind it to all future calls
    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    await calendar.events.list(
      {
        calendarId: GCAL_ID,
        timeMin: new Date().toISOString(),
        maxResults: 6,
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, result) => {
        if (error) {
          console.error(error);
          res.send(JSON.stringify({ error: error }));
        } else {
          if (result.data.items.length) {
            res.send(JSON.stringify({ events: result.data.items }));
            console.log("\u001b[32m" + "Events sent to frontend.");
          } else {
            res.send(JSON.stringify({ message: "No upcoming events found." }));
            console.warn("No upcoming events found.");
          }
        }
      }
    );
  }

  main().catch((e) => {
    console.log("another big old goof... on the backend");
    console.error(e);
    throw e;
  });
});

module.exports = router;
