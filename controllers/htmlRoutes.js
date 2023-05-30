const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../models");

router.get("/", (req, res) => {
  res.send("home");
});

module.exports = router;
