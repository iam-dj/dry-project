const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const npcs = await NPC.findAll({
      include: Gym,
    });

    res.status(200).json(npcs);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
