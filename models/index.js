const Gym = require("./Gym");
const Move = require("./Move");
const Pokemon = require("./Pokemon");
const User = require("./User");
const Trainer = require("./Trainer");
const NPC = require("./NPC");
const PokemonReference = require("./PokemonReference");
const TM = require("./TM");
const { move } = require("../controllers");

Trainer.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasOne(Trainer, {
  onDelete: "CASCADE",
  foreignKey: "user_id",
});

Trainer.hasMany(Pokemon);

Trainer.hasMany(TM);

TM.belongsTo(Trainer);

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

// TM.belongsTo(Move, { as: "" });

Gym.hasOne(NPC, {
  // foreignKey: "GymId",
  // as: "npc",
});

NPC.belongsTo(Gym, {
  // foreignKey: "GymId",
  // as: "gym",
});

// NPC.hasMany(Pokemon);
// Pokemon.belongsTo(NPC);
// Move.belongsTo(NPC);

// Pokemon.belongsTo(NPC);

module.exports = {
  NPC: NPC,
  Gym: Gym,
  Move: Move,
  Pokemon: Pokemon,
  User: User,
  Trainer: Trainer,
  PokemonReference: PokemonReference,
  TM: TM,
};
