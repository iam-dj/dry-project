const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Pokemon = require("./Pokemon");
const User = require("./User");
const pokemonData = require("../seeds/pokemon-seeds.json");

class Trainer extends Model {}

Trainer.init(
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
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicUrl: {
      type: DataTypes.STRING,
      allowNull: true,
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
    numSpins: {
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
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
    // hooks: {
    //   afterCreate: async (newTrainer) => {
    //     const id = newTrainer.id;
    //     const promises = [];
    //     for (let i = 0; i < pokemonData.length; i++) {
    //       const pokemon = { ...pokemonData[i] };
    //       pokemon.TrainerId = id;
    //       promises.push(Pokemon.create(pokemon));
    //     }
    //     await Promise.all(promises);
    //   },
    // },
    // hooks: {
    //   afterCreate: async (newTrainer) => {
    //     console.log(pokemonData);
    //     const id = newTrainer.id;
    //     let pokemonId = 2;
    //     for (let i = 0; i < pokemonData.length; i++) {
    //       const pokemon = { ...pokemonData[i] };
    //       pokemon.TrainerId = id;
    //       pokemon.id = pokemonId++;
    //       await Pokemon.create(pokemon);
    //     }
    //   },
    // },
    sequelize,
    timestamps: false,
    modelName: "Trainer",
    tableName: "trainer",
    underscored: true,
  }
);

module.exports = Trainer;
