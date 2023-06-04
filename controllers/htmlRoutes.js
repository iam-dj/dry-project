const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../models");
const cloudinary = require("cloudinary").v2;

router.get("/", (req, res) => {
  res.send("home");
});

router.post("/upload", async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ url: result.url });
  } catch (error) {
    res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = router;
