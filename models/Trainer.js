const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trainer extends Model {}

Trainer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
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
    timestamps: false,
    modelName: "Trainer",
    tableName: "trainer",
    underscored: true,
  }
);

module.exports = Trainer;
