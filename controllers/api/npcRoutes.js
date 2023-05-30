const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../../models");

//findall
router.get("/", (req, res) => {
  NPC.findAll({
    include: [Pokemon, Move],
  })
    .then((npc) => {
      res.json(npc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Uh oh, that NPC doesnt exist!", err });
    });
});

router.get("/:id", async (req, res) => {
  try {
    const npc = await NPC.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    res.status(200).json(npc);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
