const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqueID = require("uniqid");

const videosFile = () => {
  const fileContent = fs.readFileSync("./data/video-details.json");
  const parsedFileContent = JSON.parse(fileContent);

  return parsedFileContent;
};

router.get("/", (_req, res) => {
  try {
    return res.status(200).json(videosFile());
  } catch (error) {
    return res.status(500).json({ error: "Not Found" });
  }
});

router.get("/:id", (req, res) => {
  const video = videosFile();

  const getVideo = video.find((video) => video.id === req.params.id);

  if (!getVideo) {
    return res.status(404).send("Video not found");
  }
  res.json(getVideo);
});

router.post("/", (req, res) => {
  const newVideo = {
    id: uniqueID(),
    title: "",
    channel: "NBA daily",
    image: "image",
    description: "",
    views: "15,000,000",
    likes: "1,000,000",
    duration: "10:00",
    video: "",
    timestamp: Date.now(),
    comments: [],
  };
  res.json(newVideo);
});

module.exports = router;
