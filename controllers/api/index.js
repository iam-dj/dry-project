const router = require("express").Router();
const { User, Pokemon, Gym, Move, NPC, Trainer } = require("../../models");

const userRoutes = require("./userRoutes");
const pokemonRoutes = require("./pokemonRoutes");
const gymRoutes = require("./gymRoutes");
const npcRoutes = require("./npcRoutes");
const trainerRoutes = require("./trainerRoutes");
const moveRoutes = require("./moveRoutes");
const pokemonReferenceRoutes = require("./pokemonReferenceRoutes");

router.use("/pokemon", pokemonRoutes);
router.use("/gyms", gymRoutes);
router.use("/users", userRoutes);
router.use("/moves", moveRoutes);
router.use("/trainers", trainerRoutes);
router.use("/npcs", npcRoutes);
router.use("/pokemonreferences", pokemonReferenceRoutes);

module.exports = router;
