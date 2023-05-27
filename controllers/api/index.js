const router = require("express").Router();
const { User, Pokemon, Gym } = require("../../models");

const userRoutes = require("./userRoutes");
const pokemonRoutes = require("./pokemonRoutes");
const gymRoutes = require("./gymRoutes");

router.use("/pokemon", pokemonRoutes);
router.use("/gym", gymRoutes);
router.use("/users", userRoutes);

module.exports = router;