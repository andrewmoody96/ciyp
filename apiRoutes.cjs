const express = require("express");
require("dotenv").config();
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
router.get("/shows", async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: GoogleServiceAccountKeys,
      scopes: [
        "https://www.googleapis.com/auth/calendar.events.readonly",
        "https://www.googleapis.com/auth/calendar.readonly",
      ],
    });

    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const result = await calendar.events.list({
      calendarId: GCAL_ID,
      timeMin: new Date().toISOString(),
      maxResults: 6,
      singleEvents: true,
      orderBy: "startTime",
    });

    if (result.data.items.length) {
      res.json({ events: result.data.items });
      console.log("\u001b[32mEvents sent to frontend.");
    } else {
      res.json({ message: "No upcoming events found." });
      console.warn("No upcoming events found.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
