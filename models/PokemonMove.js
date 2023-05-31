const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Move = require("./Move");
const Pokemon = require("./Pokemon");

class PokemonMove extends Model {}

PokemonMove.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemonId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Pokemon,
        key: "id",
      },
    },
    moveId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Move,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "pokemonMove",
    tableName: "pokemon_moves",
    underscored: true,
  }
);

module.exports = PokemonMove;
