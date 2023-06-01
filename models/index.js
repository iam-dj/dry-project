const Gym = require("./Gym");
const Move = require("./Move");
const Pokemon = require("./Pokemon");
const User = require("./User");
const Trainer = require("./Trainer");
const NPC = require("./NPC");
const { move } = require("../controllers");

// User.hasOne(Trainer, {
//   onDelete: "Cascade",
// });

// Trainer.belongsTo(User);

Trainer.hasMany(Pokemon);

Pokemon.belongsTo(Trainer);

// Pokemon.belongsToMany(Trainer, {
//   through: "TrainerPokemon",
//   foreignKey: "pokemonId",
//   otherKey: "trainerId",
//   as: "trainers",
// });

// Trainer.belongsToMany(Pokemon, {
//   through: "TrainerPokemon",
//   foreignKey: "trainerId",
//   otherKey: "pokemonId",
//   as: "pokemon",
// });

Pokemon.belongsTo(Trainer);

Move.hasOne(Pokemon, { model: Pokemon, as: "move1" });
Move.hasOne(Pokemon, { model: Pokemon, as: "move2" });
Move.hasOne(Pokemon, { model: Pokemon, as: "move3" });
Move.hasOne(Pokemon, { model: Pokemon, as: "move4" });

Pokemon.belongsTo(Move, { as: "move1" });
Pokemon.belongsTo(Move, { as: "move2" });
Pokemon.belongsTo(Move, { as: "move3" });
Pokemon.belongsTo(Move, { as: "move4" });

// Gym.hasOne(NPC);

NPC.belongsTo(Gym);

NPC.hasMany(Pokemon);
Pokemon.belongsTo(NPC);
Move.belongsTo(NPC);

// Pokemon.belongsTo(NPC);

module.exports = {
  NPC: NPC,
  Gym: Gym,
  Move: Move,
  Pokemon: Pokemon,
  User: User,
  Trainer: Trainer,
};
