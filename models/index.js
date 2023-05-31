const Gym = require("./Gym");
const Move = require("./Move");
const Pokemon = require("./Pokemon");
const User = require("./User");
const Trainer = require("./Trainer");
const NPC = require("./NPC");
const PokemonMove = require("./PokemonMove");

User.hasOne(Trainer, {
  onDelete: "Cascade",
});

Trainer.belongsTo(User);

Trainer.hasMany(Pokemon);

Pokemon.belongsTo(Trainer);

// Pokemon.hasOne(Move, { model: Move, as: "move_1" });
// Pokemon.hasOne(Move, { model: Move, as: "move_2" });
// Pokemon.hasOne(Move, { model: Move, as: "move_3" });
// Pokemon.hasOne(Move, { model: Move, as: "move_4" });

Move.hasOne(Pokemon, { model: Pokemon, as: "move1" });
Move.hasOne(Pokemon, { model: Pokemon, as: "move2" });
Move.hasOne(Pokemon, { model: Pokemon, as: "move3" });
Move.hasOne(Pokemon, { model: Pokemon, as: "move4" });

Pokemon.belongsTo(Move, { as: "move1" });
Pokemon.belongsTo(Move, { as: "move2" });
Pokemon.belongsTo(Move, { as: "move3" });
Pokemon.belongsTo(Move, { as: "move4" });
// Pokemon.belongsToMany(Move, {
//   through: PokemonMove,
//   foreignKey: "pokemonId",
//   otherKey: "moveId",
// });

// Move.belongsToMany(Pokemon, {
//   through: PokemonMove,
//   foreignKey: "moveId",
//   otherKey: "pokemonId",
// });

Gym.hasOne(NPC);

NPC.belongsTo(Gym);

NPC.hasMany(Pokemon);

// Pokemon.belongsTo(NPC);

module.exports = {
  NPC: NPC,
  Gym: Gym,
  Move: Move,
  Pokemon: Pokemon,
  User: User,
  Trainer: Trainer,
  PokemonMove: PokemonMove,
};
