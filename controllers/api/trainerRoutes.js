const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move, TM } = require("../../models");
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
        // { model: TM },
      ],
    });
    res.status(200).json(trainers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//get trainers TMs route
router.get("/:id/tms", async (req, res) => {
  try {
    const trainers = await Trainer.findByPk(req.params.id, {
      include: [
        // {
        //   model: Pokemon,
        //   as: "pokemons",
        //   include: [
        //     { model: Move, as: "move1" },
        //     { model: Move, as: "move2" },
        //     { model: Move, as: "move3" },
        //     { model: Move, as: "move4" },
        //   ],
        // },
        { 
          model: TM, 
          where: { inInventory: true },
        },
      ],
    });
    res.status(200).json(trainers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});




router.get("/:id", async (req, res) => {
  try {
    const trainers = await Trainer.findByPk(req.params.id, {
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

//route to get pokemon by trainer id that returns the pokemon that isMain:true
router.get("/main/:id", async (req, res) => {
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
          where: { isMain: true }, // Filter to show only the Pokémon with "isMain: true"
        },
        { model: User },
      ],
    });
    res.status(200).json(trainer);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Route to get numSpins
router.get("/spinNum/:id", async (req, res) => {
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

    // Accessing the value of numSpins
    const numSpins = trainer.numSpins;

    res.status(200).json({ numSpins });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Route to get NumWins
router.get("/numwins/:id", async (req, res) => {
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

    // Accessing the value of numWins
    const numWins = trainer.numWins;

    res.status(200).json({ numWins });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//Route to update numSpins for insomnia
router.put("/spinNum/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { numSpins } = req.body;

    // Update the numSpins value in the database
    await Trainer.update(
      { numSpins },
      {
        where: { id },
      }
    );

    res.status(200).json({ message: "numSpins updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});   

//Route to auto add spin
router.put("/spin-add/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const trainer = await Trainer.findByPk(id);

    trainer.numSpins++;

    await trainer.save();

    res.status(200).json({ message: "numSpins updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//route to get isCaught:true pokemon of trainer by id
router.get("/caught/:id", async (req, res) => {
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
          where: { isCaught: true }, // Filter to show only the Pokémon with "isMain: true"
        },
        { model: User },
      ],
    });
    res.status(200).json(trainer);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//route for incrementing battles won for pokemon
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

    // console.log(trainer);

    const pokemon = trainer.pokemons.find(
      (p) => p.name === pokemonName && p.isCaught === true
    );
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Increment battlesWon by one
    pokemon.battlesWon += 1;
    pokemon.experience += 1;

    if (pokemon.experience >= 20) {
      pokemon.hp += 20;
      pokemon.experience = 0;
    }

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
//route for incrementing pokehp
router.put("/:id/hp/:name", async (req, res) => {
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
      (p) => p.name === pokemonName && p.isMain === true
    );
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Update HP by 15
    pokemon.hp += 15;

    await pokemon.save();

    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route to update gym-nameBadegVictory
router.put("/:id/badgevictory/:name", async (req, res) => {
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
      (p) => p.name === pokemonName && p.isMain === true
    );
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Update HP by 15
    pokemon.boulderBadgeVictory = 2;

    await pokemon.save();

    res.json("updated pokemon");
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route for switching iscaught boolean
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
    const numSpins = trainer.numSpins;

    pokemon.isCaught = true;

    if (numSpins > 0) {
      trainer.numSpins--;
    }

    await pokemon.save();

    await trainer.save();
    res.json(pokemon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route for switching inInventory boolean
router.put("/:id/isnewmove/:name", async (req, res) => {
  const moveName = req.params.name;
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
        { 
          model: TM, 
        },
      ],
    });
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const TMz = trainer.TMs.find(
      (p) => p.TM_name === moveName && p.inInventory === false
    );
    if (!TMz) {
      return res
        .status(404)
        .json({ error: "TM not found or already in your possesion" });
    }

    const numSpins = trainer.numSpins;

    TMz.inInventory = true;

    if (numSpins > 0) {
      trainer.numSpins--;
    }

    await TMz.save();

    await trainer.save();
    res.json(TMz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route for adding spins to trainer
router.put("/:id/numspins-add", async (req, res) => {
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

    trainer.numSpins++;

    await trainer.save();
    res.json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route for subtracting spins from trainer
router.put("/:id/numspins-sub", async (req, res) => {
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

    trainer.numSpins = trainer.numSpins - 1;

    await trainer.save();
    
    res.json(trainer);
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

    const pokemon = trainer.pokemons.find((p) => p.isMain === true);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Increment battlesWon by one
    pokemon.battlesWon++;
    const experienceGained = Math.floor(Math.random() * 10) + 1; // Random value between 1 and 10
    pokemon.experience += experienceGained;

    let levelChange = 0;
    let hpChange = 0;

    if (pokemon.experience >= 10) {
      pokemon.hp += 10;
      pokemon.experience = 0;
      pokemon.level++;
      levelChange = 1;
      hpChange = 10;
    }

    let pokemonNewLevel = pokemon.level;
    await pokemon.save();
    // Increment the numWins field by one
    trainer.numWins += 1;

    await trainer.save();
    // console.log(trainer);
    // console.log(pokemon);
    res.status(200).json({
      trainer,
      pokemon,
      experienceGained,
      levelChange,
      hpChange,
      pokemonNewLevel,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// route to update trainer numLosses by one
router.put("/:id/increment-num-loss", async (req, res) => {
  const trainerId = req.params.id;
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

    const pokemon = trainer.pokemons.find((p) => p.isMain === true);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Increment battlesLost by one
    pokemon.battlesLost++;
    const shouldGainExperience = Math.random() <= 0.3;
    console.log("Should gain experience:", shouldGainExperience); // Log the result of the randomizer
    if (shouldGainExperience) {
      pokemon.experience++;
      console.log("Experience gained!"); // Log the experience gain
    }

    let experienceChange = 1;
    let levelChange = 0;
    let hpChange = 0;

    if (pokemon.experience >= 10) {
      pokemon.hp += 10;
      pokemon.experience = 0;
      pokemon.level++;
      levelChange = 1;
      hpChange = 10;
    }

    let pokemonNewLevel = pokemon.level;
    await pokemon.save();
    // Increment the numWins field by one
    trainer.numLosses += 1;

    await trainer.save();

    res.status(200).json({
      trainer,
      pokemon,
      experienceChange,
      levelChange,
      hpChange,
      pokemonNewLevel,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//route to change move 1, needs an INT on the request body

//updates stage 1 in gyms for pokemon
router.put("/:id/increment-num-wins-stage-1/:gymId", async (req, res) => {
  const trainerId = req.params.id;
  const gymId = req.params.gymId;
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

    const pokemon = trainer.pokemons.find((p) => p.isMain === true);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Increment battlesWon by one
    pokemon.battlesWon++;
    const experienceGained = Math.floor(Math.random() * 10) + 1; // Random value between 1 and 10
    pokemon.experience += experienceGained;

    let levelChange = 0;
    let hpChange = 0;
    let gymStageChange = "";

    if (pokemon.experience >= 10) {
      pokemon.hp += 10;
      pokemon.experience = 0;
      pokemon.level++;
      levelChange = 1;
      hpChange = 10;
    }

    let pokemonNewLevel = pokemon.level;

    console.log(gymId);
    //this checks to see if you are on the right stage(for instance if yo uhave already beaten stage 1, it wont increment)
    if (gymId === "1") {
      if (pokemon.gymOneStage === 1) pokemon.gymOneStage++;
      gymStageChange = "You have beaten the Gym leader's first pokemon!";
      console.log("You have beaten stage 1 of gym 1!");
    } else if (gymId === "2") {
      if (pokemon.gymTwoStage === 1) pokemon.gymTwoStage++;
      gymStageChange = "You have beaten the Gym leader's first pokemon!";
      console.log("You have beaten stage 1 of gym 2!");
    } else if (gymId === "3") {
      if (pokemon.gymThreeStage === 1) pokemon.gymThreeStage++;
      gymStageChange = "You have beaten the Gym leader's first pokemon!";
      console.log("You have beaten stage 1 of gym 3!");
    } else if (gymId === "4") {
      if (pokemon.gymFourStage === 1) pokemon.gymFourStage++;
      gymStageChange = "You have beaten the Gym leader's first pokemon!";
      console.log("You have beaten stage 1 of gym 4!");
    } else if (gymId === "5") {
      if (pokemon.gymFiveStage === 1) pokemon.gymFiveStage++;
      gymStageChange = "You have beaten the Gym leader's first pokemon!";
      console.log("You have beaten stage 1 of gym 5!");
    } else if (gymId === "6") {
      if (pokemon.gymSixStage === 1) pokemon.gymSixStage++;
      gymStageChange = "You have beaten the Gym leader's first pokemon!";
      console.log("You have beaten stage 1 of gym 6!");
    } else if (gymId === "7") {
      if (pokemon.gymSevenStage === 1) pokemon.gymSevenStage++;
      gymStageChange = "You have beaten the Gym leader's first pokemon!";
      console.log("You have beaten stage 1 of gym 7!");
    } else if (gymId === "8") {
      if (pokemon.gymEightStage === 1) pokemon.gymEightStage++;
      gymStageChange = "You have beaten the Gym leader's first pokemon!";
      console.log("You have beaten stage 1 of gym 8!");
    } else {
      // Invalid gymId
      console.log("Invalid gymId");
    }

    await pokemon.save();
    // Increment the numWins field by one
    trainer.numWins += 1;

    await trainer.save();
    // console.log(trainer);
    // console.log(pokemon);
    res.status(200).json({
      trainer,
      pokemon,
      experienceGained,
      levelChange,
      hpChange,
      gymStageChange,
      pokemonNewLevel,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// update my wins to test route


router.put("/:id/increment-num-wins-stage-2/:gymId", async (req, res) => {
  const trainerId = req.params.id;
  const gymId = req.params.gymId;
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

    const pokemon = trainer.pokemons.find((p) => p.isMain === true);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Increment battlesWon by one
    pokemon.battlesWon++;
    const experienceGained = Math.floor(Math.random() * 10) + 1; // Random value between 1 and 10
    pokemon.experience += experienceGained;

    let levelChange = 0;
    let hpChange = 0;
    let gymStageChange = "";

    if (pokemon.experience >= 10) {
      pokemon.hp += 10;
      pokemon.experience = 0;
      pokemon.level++;
      levelChange = 1;
      hpChange = 10;
    }

    let pokemonNewLevel = pokemon.level;

    //this checks to see if you are on the right stage(for instance if yo uhave already beaten stage 1, it wont increment)
    if (gymId === "1") {
      if (pokemon.gymOneStage === 2) pokemon.gymOneStage++;
      gymStageChange = "You have progressed to the next stage of the Gym!";
      console.log("You have beaten stage 2 of gym 1!");
    } else if (gymId === "2") {
      if (pokemon.gymTwoStage === 2) pokemon.gymTwoStage++;
      gymStageChange = "You have progressed to the next stage of the Gym!";
      console.log("You have beaten stage 2 of gym 2!");
    } else if (gymId === "3") {
      if (pokemon.gymThreeStage === 2) pokemon.gymThreeStage++;
      gymStageChange = "You have progressed to the next stage of the Gym!";
      console.log("You have beaten stage 2 of gym 3!");
    } else if (gymId === "4") {
      if (pokemon.gymFourStage === 2) pokemon.gymFourStage++;
      gymStageChange = "You have progressed to the next stage of the Gym!";
      console.log("You have beaten stage 2 of gym 4!");
    } else if (gymId === "5") {
      if (pokemon.gymFiveStage === 2) pokemon.gymFiveStage++;
      gymStageChange = "You have progressed to the next stage of the Gym!";
      console.log("You have beaten stage 2 of gym 5!");
    } else if (gymId === "6") {
      if (pokemon.gymSixStage === 2) pokemon.gymSixStage++;
      gymStageChange = "You have progressed to the next stage of the Gym!";
      console.log("You have beaten stage 2 of gym 6!");
    } else if (gymId === "7") {
      if (pokemon.gymSevenStage === 2) pokemon.gymSevenStage++;
      gymStageChange = "You have progressed to the next stage of the Gym!";
      console.log("You have beaten stage 2 of gym 7!");
    } else if (gymId === "8") {
      if (pokemon.gymEightStage === 2) pokemon.gymEightStage++;
      gymStageChange = "You have progressed to the next stage of the Gym!";
      console.log("You have beaten stage 2 of gym 8!");
    } else {
      // Invalid gymId
      console.log("Invalid gymId");
    }

    await pokemon.save();
    // Increment the numWins field by one
    trainer.numWins += 1;

    await trainer.save();
    // console.log(trainer);
    // console.log(pokemon);
    res.status(200).json({
      trainer,
      pokemon,
      experienceGained,
      levelChange,
      hpChange,
      gymStageChange,
      pokemonNewLevel,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.put("/:id/increment-num-wins-stage-3/:gymId", async (req, res) => {
  const trainerId = req.params.id;
  const gymId = req.params.gymId;
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

    const pokemon = trainer.pokemons.find((p) => p.isMain === true);
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }

    // Increment battlesWon by one
    pokemon.battlesWon++;
    const experienceGained = Math.floor(Math.random() * 10) + 1; // Random value between 1 and 10
    pokemon.experience += experienceGained;

    let levelChange = 0;
    let hpChange = 0;
    let gymStageChange = "";

    if (pokemon.experience >= 10) {
      pokemon.hp += 10;
      pokemon.experience = 0;
      pokemon.level++;
      levelChange = 1;
      hpChange = 10;
    }

    let pokemonNewLevel = pokemon.level;

    console.log(trainer);
    //this checks to see if you are on the right stage(for instance if yo uhave already beaten stage 1, it wont increment)
    if (gymId === "1") {
      if (pokemon.gymOneStage === 3) pokemon.gymOneStage = 1;
      pokemon.boulderBadgeVictory++;
      trainer.boulder_badge = true;
      gymStageChange =
        "You have beaten the Gym master's final pokemon and earned the Boulder Badge!";
      console.log("You have beaten stage 3 of gym 1!");
    } else if (gymId === "2") {
      if (pokemon.gymTwoStage === 3) pokemon.gymTwoStage = 1;
      pokemon.cascadeBadgeVictory++;
      trainer.cascade_badge = true;
      gymStageChange =
        "You have beaten the Gym master's final pokemon and earned the Cascade Badge!";
      console.log("You have beaten stage 3 of gym 2!");
    } else if (gymId === "3") {
      if (pokemon.gymThreeStage === 3) pokemon.gymThreeStage = 1;
      pokemon.thunderBadgeVictory++;
      trainer.thunder_badge = true;
      gymStageChange =
        "You have beaten the Gym master's final pokemon and earned the Thunder Badge!";
      console.log("You have beaten stage 3 of gym 3!");
    } else if (gymId === "4") {
      if (pokemon.gymFourStage === 3) pokemon.gymFourStage = 1;
      pokemon.rainbowBadgeVictory++;
      trainer.rainbow_badge = true;
      gymStageChange =
        "You have beaten the Gym master's final pokemon and earned the Rainbow Badge!";
      console.log("You have beaten stage 3 of gym 4!");
    } else if (gymId === "5") {
      if (pokemon.gymFiveStage === 3) pokemon.gymFiveStage = 1;
      pokemon.marshBadgeVictory++;
      trainer.marsh_badge = true;
      gymStageChange =
        "You have beaten the Gym master's final pokemon and earned the Marsh Badge!";
      console.log("You have beaten stage 3 of gym 5!");
    } else if (gymId === "6") {
      if (pokemon.gymSixStage === 3) pokemon.gymSixStage = 1;
      pokemon.soulBadgeVictory++;
      trainer.soul_badge = true;
      gymStageChange =
        "You have beaten the Gym master's final pokemon and earned the Soul Badge!";
      console.log("You have beaten stage 3 of gym 6!");
    } else if (gymId === "7") {
      if (pokemon.gymSevenStage === 3) pokemon.gymSevenStage = 1;
      pokemon.volcanoBadgeVictory++;
      trainer.volcano_badge = true;
      gymStageChange =
        "You have beaten the Gym master's final pokemon and earned the Volcano Badge!";
      console.log("You have beaten stage 3 of gym 7!");
    } else if (gymId === "8") {
      if (pokemon.gymEightStage === 3) pokemon.gymEightStage = 1;
      pokemon.earthBadgeVictory++;
      trainer.earth_badge = true;
      gymStageChange =
        "You have beaten the Gym master's final pokemon and earned the Earth Badge!";
      console.log("You have beaten stage 3 of gym 8!");
    } else {
      // Invalid gymId
      console.log("Invalid gymId");
    }

    await pokemon.save();
    // Increment the numWins field by one
    trainer.numWins += 1;

    await trainer.save();
    // console.log(trainer);
    // console.log(pokemon);
    res.status(200).json({
      trainer,
      pokemon,
      experienceGained,
      levelChange,
      hpChange,
      gymStageChange,
      pokemonNewLevel,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
