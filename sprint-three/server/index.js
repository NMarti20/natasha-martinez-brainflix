const express = require("express");
const cors = require("cors");
const app = express();
const videos = require("./routes/videos");

app.use(express.json());

app.use(express.static("public"));
// app.use(express.static('./public/images/assets'));
app.use(cors());

app.use((_req, res, next) => {
  console.log("Incoming request");
  next();
});

app.use("/videos", videos);

app.listen(8080, () => {
  console.log("Server is running");
});
