const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trainer extends Model {}

Trainer.init(
  {
    // ** id will auto generate
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trainer_gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trainer_age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trainer_badges: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numWins: {
      type: DataTypes.INT,
      allowNull: false,
    },
    numLosses: {
      type: DataTypes.INT,
      allowNull: false,
    },
    new_user: {
      type: DataTypes.INT,
    },
    //**foreign key: will auto generate
  },
  {
    sequelize,
  }
);

module.exports = Trainer;
