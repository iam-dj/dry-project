const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../../models");

//get all moves
router.get("/", async (req, res) => {
  try {
    const moves = await Move.findAll();
    res.json(moves);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  }
});

//search moves by id
router.get("/:id", async (req, res) => {
  try {
    const moves = await Move.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    res.status(200).json(moves);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//search moves by type
router.get("/:type", async (req, res) => {
  try {
    const dbMoveData = await Move.findAll({
      where: { type: req.params.type },
    });
    res.status(200).json(dbMoveData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search moves by name
router.get("/:name", async (req, res) => {
  try {
    const dbMoveData = await Move.findAll({
      where: { name: req.params.name },
    });
    res.status(200).json(dbMoveData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search moves by less than 30 power
router.get("/:powerbelow30", async (req, res) => {
  try {
    const dbMoveData = await Move.findAll({
      where: { power: req.params.power },
    });
    const below30Power = dbMoveData.filter((move) => move.power < 30);

    res.status(200).json(below30Power);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search moves by less than 60 power but above 30
router.get("/:power30-60", async (req, res) => {
  try {
    const dbMoveData = await Move.findAll({
      where: { power: req.params.power },
    });
    const above30Power = dbMoveData.filter((move) => move.power > 30);

    const below60Power = above30Power.filter((move) => move.power < 60);

    res.status(200).json(below60Power);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search moves by less than 60 power but above 30
router.get("/:power60-100", async (req, res) => {
  try {
    const dbMoveData = await Move.findAll({
      where: { power: req.params.power },
    });
    const above60Power = dbMoveData.filter((move) => move.power > 60);

    const below100Power = above60Power.filter((move) => move.power < 100);

    res.status(200).json(below100Power);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//search moves by more than 100 power
router.get("/:powerabove100", async (req, res) => {
  try {
    const dbMoveData = await Move.findAll({
      where: { power: req.params.power },
    });
    const above100Power = dbMoveData.filter((move) => move.power > 100);

    res.status(200).json(above100Power);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
