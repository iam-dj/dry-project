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

    //**pokemon foreign key: will auto generate
  },
  {
    sequelize,
    timestamps: false,
    modelName: "NPC",
    tableName: "npc",
  }
);

module.exports = NPC;
