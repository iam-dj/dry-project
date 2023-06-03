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
          include: [
            { model: Move, as: "move1" },
            { model: Move, as: "move2" },
            { model: Move, as: "move3" },
            { model: Move, as: "move4" },
          ],
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

//route for incrementing battles won
router.put("/:id/increment-battles-won/:name", async (req, res) => {
  const pokemonName = req.params.name;
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
        { model: User },
      ],
    });
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    console.log(trainer);

    const pokemon = trainer.pokemons.find(
      (p) => p.name === pokemonName && p.isCaught === true
    );
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Increment battlesWon by one
    pokemon.battlesWon += 1;

    await pokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route for incrementing battles lost
router.put("/:id/increment-battles-lost/:name", async (req, res) => {
  const pokemonName = req.params.name;
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
        { model: User },
      ],
    });
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    console.log(trainer);

    const pokemon = trainer.pokemons.find(
      (p) => p.name === pokemonName && p.isCaught === true
    );
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Increment battlesWon by one
    pokemon.battlesLost += 1;

    await pokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route for getting switching iscaught boolean
router.put("/:id/iscaught/:name", async (req, res) => {
  const pokemonName = req.params.name;
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
        { model: User },
      ],
    });
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const pokemon = trainer.pokemons.find(
      (p) => p.name === pokemonName && p.isCaught === false
    );
    if (!pokemon) {
      return res
        .status(404)
        .json({ error: "Pokemon not found or already caught" });
    }

    pokemon.isCaught = true;

    await pokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route for changing your main pokemon
router.put("/:id/ismain/:name", async (req, res) => {
  const pokemonName = req.params.name;
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
        { model: User },
      ],
    });
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const previousMainPokemon = trainer.pokemons.find((p) => p.isMain === true);
    if (previousMainPokemon) {
      previousMainPokemon.isMain = false;
    }
    console.log(previousMainPokemon);

    const pokemon = trainer.pokemons.find(
      (p) => p.name === pokemonName && p.isCaught === true
    );
    if (pokemon.length === 0) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    pokemon.isMain = true;

    await pokemon.save();
    await previousMainPokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//create a new trainer
router.post("/", async (req, res) => {
  try {
    const newTrainer = await Trainer.create(req.body);
    return res.status(200).json(newTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//get trainer by id (only trainer, not pokemon or move data)
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

//route to flip the boulder badge boolean to true
router.put("/:id/flip-boulder-badge", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Flip the boulder_badge boolean
    if (trainer.boulder_badge === false) {
      trainer.boulder_badge = true;
    }

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to flip the soul badge boolean to true
router.put("/:id/flip-soul-badge", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Flip the soul_badge boolean
    if (trainer.soul_badge === false) {
      trainer.soul_badge = true;
    }

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to flip the volcano badge boolean to true
router.put("/:id/flip-volcano-badge", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Flip the volcano_badge boolean
    if (trainer.volcano_badge === false) {
      trainer.volcano_badge = true;
    }

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to flip the earth badge boolean to true
router.put("/:id/flip-earth-badge", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Flip the earth_badge boolean
    if (trainer.earth_badge === false) {
      trainer.earth_badge = true;
    }

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to flip the cascade badge boolean to true
router.put("/:id/flip-cascade-badge", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Flip the cascade_badge boolean
    if (trainer.cascade_badge === false) {
      trainer.cascade_badge = true;
    }

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to flip the thunder badge boolean to true
router.put("/:id/flip-thunder-badge", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Flip the thunder_badge boolean
    if (trainer.thunder_badge === false) {
      trainer.thunder_badge = true;
    }

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to flip the rainbow badge boolean to true
router.put("/:id/flip-rainbow-badge", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Flip the rainbow_badge boolean
    if (trainer.rainbow_badge === false) {
      trainer.rainbow_badge = true;
    }

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to flip the marsh badge boolean to true
router.put("/:id/flip-marsh-badge", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Flip the marsh_badge boolean
    if (trainer.marsh_badge === false) {
      trainer.marsh_badge = true;
    }

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// route to update trainer numwins by one
router.put("/:id/increment-num-wins", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Increment the numWins field by one
    trainer.numWins += 1;

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
// route to update trainer numLosses by one
router.put("/:id/increment-num-loss", async (req, res) => {
  const trainerId = req.params.id;
  try {
    const trainer = await Trainer.findByPk(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    // Increment the numWins field by one
    trainer.numLosses += 1;

    await trainer.save();

    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route to change move 1, needs an INT on the request body
router.put("/:id/pokemon/:name/update-move1", async (req, res) => {
  const trainerId = req.params.id;
  const pokemonName = req.params.name;
  const move1Id = req.body.move1Id; // Assuming the move1Id is provided in the request body

  try {
    const trainer = await Trainer.findByPk(trainerId, {
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
        { model: User },
      ],
    });

    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const pokemon = trainer.pokemons.find((p) => p.name === pokemonName);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    pokemon.move1Id = move1Id;

    await pokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to change move 1, needs an INT on the request body
router.put("/:id/pokemon/:name/update-move4", async (req, res) => {
  const trainerId = req.params.id;
  const pokemonName = req.params.name;
  const move4Id = req.body.move4Id; // Assuming the move4Id is provided in the request body

  try {
    const trainer = await Trainer.findByPk(trainerId, {
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
        { model: User },
      ],
    });

    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const pokemon = trainer.pokemons.find((p) => p.name === pokemonName);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    pokemon.move4Id = move4Id;

    await pokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to change move 1, needs an INT on the request body
router.put("/:id/pokemon/:name/update-move2", async (req, res) => {
  const trainerId = req.params.id;
  const pokemonName = req.params.name;
  const move2Id = req.body.move2Id; // Assuming the move2Id is provided in the request body

  try {
    const trainer = await Trainer.findByPk(trainerId, {
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
        { model: User },
      ],
    });

    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const pokemon = trainer.pokemons.find((p) => p.name === pokemonName);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    pokemon.move2Id = move2Id;

    await pokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
//route to change move 1, needs an INT on the request body
router.put("/:id/pokemon/:name/update-move3", async (req, res) => {
  const trainerId = req.params.id;
  const pokemonName = req.params.name;
  const move3Id = req.body.move3Id; // Assuming the move3Id is provided in the request body

  try {
    const trainer = await Trainer.findByPk(trainerId, {
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
        { model: User },
      ],
    });

    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const pokemon = trainer.pokemons.find((p) => p.name === pokemonName);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    pokemon.move3Id = move3Id;

    await pokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
module.exports = router;
