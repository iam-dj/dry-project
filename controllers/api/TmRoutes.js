const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move, TM } = require("../../models");
const jwt = require("jsonwebtoken");

router.put("/:id/iscaught/:name", async (req, res) => {
  const TmName = req.params.name;
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
        { model: TM },
      ],
    });
    if (!trainer) {
      return res.status(404).json({ error: "Trainer not found" });
    }

    const tm = trainer.TMs.find(
      (t) => t.TM_name === pokemonName && t.inInventory === false
    );
    if (!tm) {
      return res
        .status(404)
        .json({ error: "Pokemon not found or already caught" });
    }
    const numSpins = trainer.numSpins;

    tm.inInventory = true;

    if (numSpins > 0) {
      trainer.numSpins--;
    }

    await tm.save();

    await trainer.save();
    res.json(tm);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// router.put("/:id/pokemon/:name/update-move1/:tmName", async (req, res) => {
//   const trainerId = req.params.id;
//   const pokemonName = req.params.name;
//   const tmName = req.params.tmName;

//   try {
//     const trainer = await Trainer.findByPk(trainerId, {
//       include: [
//         {
//           model: Pokemon,
//           as: "pokemons",
//           include: [
//             { model: Move, as: "move1" },
//             { model: Move, as: "move2" },
//             { model: Move, as: "move3" },
//             { model: Move, as: "move4" },
//           ],
//           where: { isMain: true },
//         },
//         { model: User },
//         { model: TM, where: { inInventory: true } },
//       ],
//     });

//     if (!trainer) {
//       return res.status(404).json({ error: "Trainer not found" });
//     }

//     const pokemon = trainer.pokemons.find(
//       (p) => p.name === pokemonName && p.isMain === true
//     );

//     if (!pokemon) {
//       return res.status(404).json({ error: "Pokemon not found" });
//     }

//     const tm = trainer.TMs.find((t) => t.TM_name === tmName);

//     if (!tm) {
//       return res.status(404).json({ message: "tm not found" });
//     }

//     const move = tm.move;

//     pokemon.move1Id = move.id;
//     tm.inInventory = false;

//     await pokemon.save();
//     await tm.save();
//     await trainer.save();

//     res.json(pokemon);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// });
// //route to change move 1, needs an INT on the request body
// router.put("/:id/pokemon/:name/update-move2/:tmName", async (req, res) => {
//   const trainerId = req.params.id;
//   const pokemonName = req.params.name;
//   const tmName = req.params.tmName;

//   try {
//     const trainer = await Trainer.findByPk(trainerId, {
//       include: [
//         {
//           model: Pokemon,
//           as: "pokemons",
//           include: [
//             { model: Move, as: "move1" },
//             { model: Move, as: "move2" },
//             { model: Move, as: "move3" },
//             { model: Move, as: "move4" },
//           ],
//           where: { isMain: true },
//         },
//         { model: User },
//         { model: TM, where: { inInventory: true } },
//       ],
//     });

//     if (!trainer) {
//       return res.status(404).json({ error: "Trainer not found" });
//     }

//     const pokemon = trainer.pokemons.find(
//       (p) => p.name === pokemonName && p.isMain === true
//     );

//     if (!pokemon) {
//       return res.status(404).json({ error: "Pokemon not found" });
//     }

//     const tm = trainer.TMs.find((t) => t.TM_name === tmName && t.inInventory);

//     if (!tm) {
//       return res.status(404).json({ message: "tm not found" });
//     }

//     const move = tm.move;

//     pokemon.move2Id = move.id;
//     tm.inInventory = false;

//     await pokemon.save();
//     await tm.save();
//     await trainer.save();

//     res.json(pokemon);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// });

// //route to change move 1, needs an INT on the request body
// router.put("/:id/pokemon/:name/update-move3/:tmName", async (req, res) => {
//   const trainerId = req.params.id;
//   const pokemonName = req.params.name;
//   const tmName = req.params.tmName;

//   try {
//     const trainer = await Trainer.findByPk(trainerId, {
//       include: [
//         {
//           model: Pokemon,
//           as: "pokemons",
//           include: [
//             { model: Move, as: "move1" },
//             { model: Move, as: "move2" },
//             { model: Move, as: "move3" },
//             { model: Move, as: "move4" },
//           ],
//           where: { isMain: true },
//         },
//         { model: User },
//         { model: TM, where: { inInventory: true } },
//       ],
//     });

//     if (!trainer) {
//       return res.status(404).json({ error: "Trainer not found" });
//     }

//     const pokemon = trainer.pokemons.find(
//       (p) => p.name === pokemonName && p.isMain === true
//     );

//     if (!pokemon) {
//       return res.status(404).json({ error: "Pokemon not found" });
//     }

//     const tm = trainer.TMs.find((t) => t.TM_name === tmName && t.inInventory);

//     if (!tm) {
//       return res.status(404).json({ message: "tm not found" });
//     }

//     const move = tm.move;

//     pokemon.move3Id = move.id;
//     tm.inInventory = false;

//     await pokemon.save();
//     await tm.save();
//     await trainer.save();

//     res.json(pokemon);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// });
// //route to change move 1, needs an INT on the request body
// router.put("/:id/pokemon/:name/update-move4/:tmName", async (req, res) => {
//   const trainerId = req.params.id;
//   const pokemonName = req.params.name;
//   const tmName = req.params.tmName;

//   try {
//     const trainer = await Trainer.findByPk(trainerId, {
//       include: [
//         {
//           model: Pokemon,
//           as: "pokemons",
//           include: [
//             { model: Move, as: "move1" },
//             { model: Move, as: "move2" },
//             { model: Move, as: "move3" },
//             { model: Move, as: "move4" },
//           ],
//           where: { isMain: true },
//         },
//         { model: User },
//         { model: TM, where: { inInventory: true } },
//       ],
//     });

//     if (!trainer) {
//       return res.status(404).json({ error: "Trainer not found" });
//     }

//     const pokemon = trainer.pokemons.find(
//       (p) => p.name === pokemonName && p.isMain === true
//     );

//     if (!pokemon) {
//       return res.status(404).json({ error: "Pokemon not found" });
//     }

//     const tm = trainer.TMs.find((t) => t.TM_name === tmName && t.inInventory);

//     if (!tm) {
//       return res.status(404).json({ message: "tm not found" });
//     }

//     const move = tm.move;

//     pokemon.move4Id = move.id;
//     tm.inInventory = false;

//     await pokemon.save();
//     await tm.save();
//     await trainer.save();

//     res.json(pokemon);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// });
//route to change move 1, needs an INT on the request body

module.exports = router;
