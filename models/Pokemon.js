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
      allowNull: false,
    },
    level: {
      type: DataTypes.INT,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INT,
      allowNull: false,
    },
    experience: {
      type: DataTypes.INT,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    evolution_id: {
      type: DataTypes.INT,
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
    weakness: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCaught: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    //**attack foreign keys: will auto generate
  },
  {
    sequelize,
  }
);

module.exports = Pokemon;
