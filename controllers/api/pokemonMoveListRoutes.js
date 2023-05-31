const express = require("express");
const router = express.Router();
const {
  User,
  Pokemon,
  Gym,
  NPC,
  Trainer,
  Move,
  PokemonMoveList,
} = require("../../models");

//get all pokemon move lists
router.get("/", async (req, res) => {
  try {
    const pokemonMoveList = await PokemonMoveList.findAll({
      include: [Move, Pokemon],
    });
    res.json(pokemonMoveList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  }
});

module.exports = router;
