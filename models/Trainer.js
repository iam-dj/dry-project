const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Pokemon = require("./Pokemon");
const pokemonData = require("../seeds/pokemon-seeds.json");

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
    profilePicUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numWins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    numLosses: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    hooks: {
      afterCreate: async (newTrainer) => {
        const id = newTrainer.id;
        for (let i = 0; i < pokemonData.length; i++) {
          const pokemon = { ...pokemonData[i] };
          pokemon.TrainerId = id;
          const newPokemon = await Pokemon.create(pokemon);
          // console.log(newPokemon);
        }
      },
    },
    sequelize,
    timestamps: false,
    modelName: "Trainer",
    tableName: "trainer",
    underscored: true,
  }
);

module.exports = Trainer;
