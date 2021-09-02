const express = require("express");
// const cors = require("cors");
const app = express();
const videos = require("./routes/videos");
// const comments = require("./routes/comments");

app.use(express.json());

// app.use(express.static('assets'));

app.use((_req, res, next) => {
  console.log("Incoming request");
  next();
});

app.use("/videos", videos);

app.listen(8080, () => {
  console.log("Server is running");
});
