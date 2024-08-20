const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");
// const uri = process.env.ATLAS_CONNECTION;
// const client = new MongoClient(uri);

// const compression = require("compression");
// const minify = require("express-minify");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(compression({ level: 3 }));
// app.use(minify());

// MongoDB for Lyric Retrieval
const source = process.env.ATLAS_CONNECTION;
mongoose.connect(source);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected.");
});

// THE SERVER
app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/api/", apiRoutes);

app.use("/*", userRoutes);

app.listen(PORT, () => console.log(`App is live on port ${PORT}!`));
