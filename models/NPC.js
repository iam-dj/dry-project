const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class NPC extends Model {}

NPC.init(
  {
    // ** id will auto generate

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    pokemon_1: {
      type: DataTypes.JSON,
    },

    //**pokemon foreign key: will auto generate
  },
  {
    sequelize,
    timestamps: false,
    modelName: "npc",
    underscored: true,
  }
);

module.exports = NPC;
