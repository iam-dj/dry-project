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

Pokemon.hasMany(Trainer);

Pokemon.belongsTo(Trainer);

Pokemon.hasMany(Move);

Gym.hasOne(NPC);

NPC.hasOne(Pokemon);

module.exports = {
  NPC: NPC,
  Gym: Gym,
  Move: Move,
  Pokemon: Pokemon,
  User: User,
  Trainer: Trainer,
};
