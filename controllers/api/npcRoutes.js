const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const npcs = await NPC.findAll({
      include: [
        {
          model: Pokemon,
          as: "pokemons",
          include: [
            { model: Move, as: "move1" },
            { model: Move, as: "move2" },
            { model: Move, as: "move3" },
            { model: Move, as: "move4" },
          ],
        },
      ],
    });
    res.status(200).json(npcs);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
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
