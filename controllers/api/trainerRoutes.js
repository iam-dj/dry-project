const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../../models");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const trainers = await Trainer.findAll({
      include: [
        {
          model: Pokemon,
          as: "pokemons",
          // include: [
          //   { model: Move, as: "move1" },
          //   { model: Move, as: "move2" },
          //   { model: Move, as: "move3" },
          //   { model: Move, as: "move4" },
          // ],
        },
        { model: User },
      ],
    });
    res.status(200).json(trainers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/:id/ismain/:name", async (req, res) => {
  const pokemonName = req.params.name;
  try {
    const trainer = await Trainer.findByPk(req.params.id);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const mainPokemon = trainer.pokemons.filter((p) => p.isMain === true);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    } else {
      mainPokemon.isMain = false;
    }

    const pokemon = trainer.pokemons.filter((p) => p.name === pokemonName);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }
    pokemon.isMain = true;
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTrainer = await Trainer.create(req.body);
    return res.status(200).json(newTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    res.status(200).json(trainer);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// routes to update the badge boolean
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { boulder_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { cascade_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { thunder_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { rainbow_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { soul_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { marsh_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { volcano_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { earth_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//fire route
router.get("/pokemon/fire/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id, {
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

    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }
    const response = await res.json(trainer);
    const filteredPokemon = response.pokemons
      .filter((pokemon) => pokemon.type === "fire")
      .map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        moves: pokemon.moves,
      }));

    console.log(filteredPokemon);
    // return filteredPokemon;
    // res.json(trainer.Pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findOne(req.params.id, {
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

    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    res.json(trainer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
