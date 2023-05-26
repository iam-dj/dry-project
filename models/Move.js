const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Move extends Model {}

Move.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    // ** id will auto generate
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // },
    },

    power: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accuracy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //**trainer foreign key: will auto generate
    //**pokemon foreign key: will auto generate
  },
  {
    sequelize,
  }
);

module.exports = Move;
