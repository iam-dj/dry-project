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
    npcPicture_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    pokemon_1: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    pokemon_2: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    pokemon_3: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    isGymMaster: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
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
