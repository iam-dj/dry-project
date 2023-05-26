const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trainer extends Model {}

Trainer.init(
  {
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numLosses: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boulder_badge: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cascade_badge: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    thunder_badge: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    rainbow_badge: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    soul_badge: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    marsh_badge: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    volcano_badge: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    earth_badge: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    //**foreign key: will auto generate
  },
  {
    sequelize,
  }
);

module.exports = Trainer;
