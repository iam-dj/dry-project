const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class NPC extends Model {}

NPC.init(
  {
    // ** id will auto generate

    NPC_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NPC_gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //**foreign key: will auto generate
  },
  {
    sequelize,
  }
);

module.exports = NPC;
