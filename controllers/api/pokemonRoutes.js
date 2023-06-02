const express = require("express");
const router = express.Router();
const {
  User,
  Pokemon,
  Gym,
  NPC,
  Trainer,
  Move,
  PokemonMove,
} = require("../../models");

//get all pokemon
router.get("/", async (req, res) => {
  try {
    const pokemon = await Pokemon.findAll({
      include: [
        { model: Move, as: "move1" },
        { model: Move, as: "move2" },
        { model: Move, as: "move3" },
        { model: Move, as: "move4" },
      ],
    });
    res.json(pokemon);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  }
});

//get all pokemon from specific user, filers to see if they are caught
router.get("/:trainerId", async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.findAll({
      where: { TrainerId: req.params.trainerId },
      include: { all: true, nested: true },
    });

    const caughtPokemon = dbPokemonData.filter(
      (pokemon) => (pokemon.isCaught = true)
    );
    res.status(200).json(caughtPokemon);
    console.log(caughtPokemon);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//search pokemon by id
router.get("/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    res.status(200).json(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//search pokemon by type
router.get("/:trainerId/:type", async (req, res) => {
  const type = req.params;
  try {
    const dbPokemonData = await Pokemon.findAll({
      where: {
        type: type,
      },
    });
    res.status(200).json(dbPokemonData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search pokemon by secondary type
router.get("/:secondary_type", async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.findAll({
      where: { secondary_type: req.params.secondary_type },
      include: { all: true, nested: true },
    });
    res.status(200).json(dbPokemonData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search pokemon by rarity
router.get("/:rarity", async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.findAll({
      where: { rarity: req.params.rarity },
      include: { all: true, nested: true },
    });
    res.status(200).json(dbPokemonData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search pokemon by tier
router.get("/:tier", async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.findAll({
      where: { tier: req.params.tier },
      include: { all: true, nested: true },
    });
    res.status(200).json(dbPokemonData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//search pokemon by if they are caught
router.get("/:iscaught", async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.findAll({
      where: { isCaught: req.params.iscaught },
      include: { all: true, nested: true },
    });
    res.status(200).json(dbPokemonData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//update pokemon to caught in the trainer's array of pokemon
router.put("/:id", async (req, res) => {
  try {
    const updatedPokemon = await Pokemon.update(
      { isCaught: true },
      { where: { id: req.params.id } }
    );
    if (!updatedPokemon) {
      return res.status(404).json({ msg: "Pokemon not found" });
    }
    return res.status(200).json(updatedPokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
