// const express = require("express");
// const router = express.Router();
// const fs = require("fs");

// const videosFile = () => {
//   const fileContent = fs.readFileSync("./data/video-details.json");
//   const parsedFileContent = JSON.parse(fileContent);

//   return res.status(200).json(parsedFileContent);
// };

// router.get("/comments", (_req, res) => {
//   try {
//     videosFile().forEach((video) => {
//       console.log(video.comments);
//     });
//     return res.status(200).json(comments);
//   } catch (error) {
//     return res.status(500).json({ error: "Not Found" });
//   }
// });

// module.exports = router;
