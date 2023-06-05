const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokemon extends Model {}

Pokemon.init(
  {
    // ** id will auto generate

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondary_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    battlesWon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    battlesLost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    evolutionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tier: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isCaught: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isMain: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    //**attack foreign keys: will auto generate
  },
  {
    sequelize,
    timestamps: false,
    modelName: "pokemon",
    underscored: true,
  }
);

module.exports = Pokemon;
