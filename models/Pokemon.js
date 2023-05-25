const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokemon extends Model {}

Pokemon.init(
  {
    // ** id will auto generate

    pokemon_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_level: {
      type: DataTypes.INT,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_exp: {
      type: DataTypes.INT,
      allowNull: false,
    },
    evolution_id: {
      type: DataTypes.INT,
      allowNull: false,
    },
    rarity: {
      //change this to boolean?
      type: DataTypes.STRING,
      allowNull: false,
    },
    tier: {
      //change this to boolean?
      type: DataTypes.STRING,
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

    //**attack foreign keys: will auto generate
  },
  {
    sequelize,
  }
);

module.exports = Pokemon;
