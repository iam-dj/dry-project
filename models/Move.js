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
      allowNull: true,
    },
    // accuracy: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
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
    timestamps: false,
    modelName: "Move",
    tableName: "Move",
  }
);

module.exports = Move;
