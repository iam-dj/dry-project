const Gym = require("./Gym");
const Move = require("./Move");
const Pokemon = require("./Pokemon");
const User = require("./User");
const Trainer = require("./Trainer");
const NPC = require("./NPC");

User.hasOne(Trainer, {
  onDelete: "Cascade",
});

Trainer.belongsTo(User);

Trainer.hasMany(Pokemon);

Pokemon.belongsTo(Trainer);

Pokemon.hasMany(Move);

Move.belongsTo(Pokemon);

Gym.hasOne(NPC);

NPC.belongsTo(Gym);

NPC.hasMany(Pokemon);

Pokemon.belongsTo(NPC);

module.exports = {
  NPC: NPC,
  Gym: Gym,
  Move: Move,
  Pokemon: Pokemon,
  User: User,
  Trainer: Trainer,
};
