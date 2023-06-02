const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PokemonReference extends Model {}
PokemonReference.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    evolutionId: {
      type: DataTypes.INTEGER,
    },
    rarity: {
      type: DataTypes.STRING,
    },
    tier: {
      type: DataTypes.INTEGER,
    },
    isCaught: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    TrainerId: {
      type: DataTypes.INTEGER,
    },
    move1Id: {
      type: DataTypes.INTEGER,
    },
    move2Id: {
      type: DataTypes.INTEGER,
    },
    move3Id: {
      type: DataTypes.INTEGER,
    },
    move4Id: {
      type: DataTypes.INTEGER,
    },
    move1_name: {
      type: DataTypes.STRING,
    },
    move1_power: {
      type: DataTypes.INTEGER,
    },
    move1_type: {
      type: DataTypes.STRING,
    },
    move1_description: {
      type: DataTypes.STRING,
    },
    move2_name: {
      type: DataTypes.STRING,
    },
    move2_power: {
      type: DataTypes.INTEGER,
    },
    move2_type: {
      type: DataTypes.STRING,
    },
    move2_description: {
      type: DataTypes.STRING,
    },
    move3_name: {
      type: DataTypes.STRING,
    },
    move3_power: {
      type: DataTypes.INTEGER,
    },
    move3_type: {
      type: DataTypes.STRING,
    },
    move3_description: {
      type: DataTypes.STRING,
    },
    move4_name: {
      type: DataTypes.STRING,
    },
    move4_power: {
      type: DataTypes.INTEGER,
    },
    move4_type: {
      type: DataTypes.STRING,
    },
    move4_description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "pokemonreference",
    underscored: true,
  }
);

module.exports = PokemonReference;
