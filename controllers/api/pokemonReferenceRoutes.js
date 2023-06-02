const express = require("express");
const router = express.Router();
const {
  User,
  Pokemon,
  Gym,
  NPC,
  Trainer,
  Move,
  PokemonReference,
} = require("../../models");

router.get("/", async (req, res) => {
  try {
    const pokemonReference = await PokemonReference.findAll();
    res.json(pokemonReference);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  }
});

module.exports = router;
