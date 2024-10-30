const express = require("express");
const router = express.Router();
// const { MongoClient } = require("mongodb");
// const uri = process.env.ATLAS_CONNECTION;
// const client = new MongoClient(uri);

const { google } = require("googleapis");
const { Storage } = require("@google-cloud/storage");
const GOOGLE_PROJECT_NUMBER = process.env.GOOGLE_PROJECT_NUMBER;

// Calendar:
const CAL_SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
const GOOGLE_CAL_KEY = process.env.GOOGLE_CAL_KEY.split(String.raw`\n`).join(
  "\n"
);
const GOOGLE_CAL_EMAIL = process.env.GOOGLE_CAL_EMAIL;
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
// Cloud Storage:
const bucketName = process.env.CS_BUCKET_NAME;
const EPKprefix = "epk/";
const homepagePrefix = "homepage/";

// AUTH
const jwt = new google.auth.JWT(
  GOOGLE_CAL_EMAIL,
  null,
  GOOGLE_CAL_KEY,
  CAL_SCOPES
);

const calendar = google.calendar({
  version: "v3",
  project: GOOGLE_PROJECT_NUMBER,
  auth: jwt,
});

// ROUTES
router.get("/shows", (req, res) => {
  calendar.events.list(
    {
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 6,
      singleEvents: true,
      orderBy: "startTime",
    },
    (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }));
      } else {
        if (result.data.items.length) {
          res.send(JSON.stringify({ events: result.data.items }));
        } else {
          res.send(JSON.stringify({ message: "No upcoming events found." }));
        }
      }
    }
  );
});

router.get("/epk", (req, res) => {
  const storage = new Storage({
    projectId: "ciyp-sitecalendar",
    credentials: {
      type: "service_account",
      project_id: "ciyp-sitecalendar",
      private_key_id: process.env.GCS_PRIVATE_KEY_ID,
      private_key: process.env.GCS_KEY.split(String.raw`\n`).join("\n"),
      client_email: process.env.GCS_EMAIL,
      client_id: process.env.GCS_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: process.env.GCS_AUTH_PROVIDER_X509,
      client_x509_cert_url: process.env.GCS_CLIENT_X509,
    },
  });
  async function listFilesByPrefix() {
    const options = {
      prefix: EPKprefix,
      // delimiter: "/",
    };

    const [files] = await storage.bucket(bucketName).getFiles(options);
    const data = [];
    files.forEach((file) => {
      const fileName = file.name;
      async function getMetadata() {
        const [metadata] = await storage
          .bucket(bucketName)
          .file(fileName)
          .getMetadata();
        const info = await metadata;
        data.push(info);
        if (data.length === files.length) {
          console.log(data);
          res.send(JSON.stringify(data));
        }
      }
      getMetadata();
    });
  }

  listFilesByPrefix().catch(console.error);
});

router.get("/homepage", (req, res) => {
  const storage = new Storage({
    projectId: "ciyp-sitecalendar",
    credentials: {
      type: "service_account",
      project_id: "ciyp-sitecalendar",
      private_key_id: process.env.GCS_PRIVATE_KEY_ID,
      private_key: process.env.GCS_KEY.split(String.raw`\n`).join("\n"),
      client_email: process.env.GCS_EMAIL,
      client_id: process.env.GCS_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: process.env.GCS_AUTH_PROVIDER_X509,
      client_x509_cert_url: process.env.GCS_CLIENT_X509,
    },
  });
  async function listFilesByPrefix() {
    const options = {
      prefix: homepagePrefix,
    };

    const [files] = await storage.bucket(bucketName).getFiles(options);
    const data = [];
    files.forEach((file) => {
      let fileName = file.name;

      async function getMetadata() {
        const [metadata] = await storage
          .bucket(bucketName)
          .file(fileName)
          .getMetadata();
        const info = await metadata;
        data.push(info);
        if (data.length === files.length) {
          res.send(JSON.stringify(data));
        }
      }
      getMetadata();
    });
  }

  listFilesByPrefix().catch(console.error);
});

router.get("/melting", (req, res) => {
  const storage = new Storage({
    projectId: "ciyp-sitecalendar",
    credentials: {
      type: "service_account",
      project_id: "ciyp-sitecalendar",
      private_key_id: process.env.GCS_PRIVATE_KEY_ID,
      private_key: process.env.GCS_KEY.split(String.raw`\n`).join("\n"),
      client_email: process.env.GCS_EMAIL,
      client_id: process.env.GCS_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: process.env.GCS_AUTH_PROVIDER_X509,
      client_x509_cert_url: process.env.GCS_CLIENT_X509,
    },
  });
  async function listFilesByPrefix() {
    const options = {
      prefix: "melting/",
      // delimiter: "/",
    };

    const [files] = await storage.bucket(bucketName).getFiles(options);
    const data = [];
    files.forEach((file) => {
      const fileName = file.name;
      async function getMetadata() {
        const [metadata] = await storage
          .bucket(bucketName)
          .file(fileName)
          .getMetadata();
        const info = await metadata;
        data.push(info);
        if (data.length === files.length) {
          console.log(data);
          res.send(JSON.stringify(data));
        }
      }
      getMetadata();
    });
  }

  listFilesByPrefix().catch(console.error);
});

router.get("/lyrics", async (req, res) => {
  console.log("/lyrics");
  const getLyrics = async (get, send) => {
    const lyricCheck = (data) => {
      if (!data) {
        res.send("Error fetching lyrics.");
        console.error("Error fetching lyrics.");
      } else {
        console.log("Lyrics Found");
        // console.log(data);
        res.send(data);
      }
    };

//     try {
//       const database = client.db("ciyp_lyrics");
//       const lyrics = database.collection("lyrics");
//       const songs = await lyrics.find().toArray();
//       // console.log(songs);
//       lyricCheck(songs);
//     } catch (error) {
//       console.log(error);
//       send.status(500).send("Internal Server error Occured");
//     }
//   };
//   getLyrics(req, res);
// });

// router.get("/p1answers", async (req, res) => {
//   console.log("/p1answers");
//   const getAnswers = async (get, send) => {
//     const answerCheck = (data) => {
//       if (!data) {
//         res.send("Error fetching answers.");
//         console.error("Error fetching answers.");
//       } else {
//         console.log("Answers Found");
//         res.send(data);
//       }
//     };

//     try {
//       const database = client.db("ciyp_p1");
//       const p1qa = database.collection("answers");
//       const answers = await p1qa.find().toArray();
//       // console.log(answers);
//       answerCheck(answers);
//     } catch (error) {
//       console.log(error);
//       send.status(500).send("Internal Server error Occured");
//     }
//   };
//   getAnswers(req, res);
// });

module.exports = router;
