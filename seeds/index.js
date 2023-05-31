const sequelize = require("../config/connection");
const { User, Pokemon, Move, NPC, Trainer, Gym } = require("../models");
const gymData = require("./gym-seeds.json");
const moveData = require("./move-seeds.json");
const userData = require("./user-seeds.json");
const npcData = require("./npc-seeds.json");
const pokemonData = require("./pokemon-seeds.json");
const trainerData = require("./trainer-seeds.json");

//this filters out duplicates from our moves data
// const uniqueMoves = [];
// for (const item of moveData) {
//   const isDuplicate = uniqueMoves.find((obj) => obj.name === item.name);
//   if (!isDuplicate) {
//     uniqueMoves.push(item);
//   }
// }
// console.log("uniqueArray", uniqueMoves);

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // await User.bulkCreate(userData, {
    //   individualHooks: true,
    //   returning: true,
    // });
    // await Trainer.bulkCreate(trainerData);
    // loop over trainers, for each trainer, bulk create all pokemon wutg trainerID

    // await Pokemon.bulkCreate(pokemonData);

    // await NPC.bulkCreate(npcData);

    // await Gym.bulkCreate(gymData);
    await createTrainer();

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

const createTrainer = async () => {
  await Move.bulkCreate(moveData);
  const newTrainer = await Trainer.create({
    id: 4,
    name: "Ash Ketchum",
    age: 16,
    numWins: 32,
    numLosses: 12,
    boulder_badge: true,
    cascade_badge: true,
    thunder_badge: true,
    rainbow_badge: true,
    soul_badge: true,
    marsh_badge: true,
    volcano_badge: true,
    earth_badge: true,
  });
};
//   const dbPokemonData = pokemonData;

//   const pokedex = dbPokemonData.map(async (data) => {
//     const pokemon = await Pokemon.create(data);
//     await newTrainer.addPokemon(pokemon);
//   });
// //
//
//
// await Pokemon.bulkCreate(pokemonData);
// for (let i = 0; i < pokemonData.length; i++) {
//   const pokemon = pokemonData[i];
//   pokemon.trainer_id = id;
//   const newPokemon = await Pokemon.create(pokemon);
//   console.log(newPokemon);
// }

seedDatabase();
