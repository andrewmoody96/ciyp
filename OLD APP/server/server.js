const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

const compression = require("compression");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression({ level: 3 }));

// THE SERVER
var options = [(etag = true), (maxAge = 31622400000), (lastModified = true)];

app.use(express.static(path.join(__dirname, "../client/build"), options));

app.use("/api/", apiRoutes);

app.use("/*", userRoutes);

app.listen(PORT, () => console.log(`App is live on port ${PORT}!`));
