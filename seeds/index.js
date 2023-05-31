const sequelize = require("../config/connection");
const {
  User,
  Pokemon,
  Move,
  NPC,
  Trainer,
  Gym,
  // PokemonMove,
} = require("../models");
const gymData = require("./gym-seeds.json");
const moveData = require("./move-seeds.json");
const userData = require("./user-seeds.json");
const npcData = require("./npc-seeds.json");
const pokemonData = require("./pokemon-seeds.json");
const trainerData = require("./trainer-seeds.json");
// const pokemonMoveListData = require("./pokemonMove-seeds.json");

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

    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Trainer.bulkCreate(trainerData);
    // loop over trainers, for each trainer, bulk create all pokemon wutg trainerID

    await Move.bulkCreate(moveData);
    await Pokemon.bulkCreate(pokemonData);

    // await PokemonMove.bulkCreate(pokemonMoveListData);

    await NPC.bulkCreate(npcData);

    await Gym.bulkCreate(gymData);

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

// const createTrainer = async () => {
//   const newTrainer = await Trainer.create();
//   const id = newTrainer.id;

//   await Pokemon.bulkCreate(pokemonData);
//   for (let i = 0; i < pokemonData.length; i++) {
//     pokemonData[i].trainerId = id;
//   }
//   await Move.bulkCreate(uniqueMoves);
//   await PokemonMove.bulkCreate(pokemonMoveListData);
// };

seedDatabase();
// createTrainer();
