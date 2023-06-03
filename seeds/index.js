const sequelize = require("../config/connection");
const {
  User,
  Pokemon,
  Move,
  NPC,
  Trainer,
  Gym,
  PokemonReference,
} = require("../models");
const gymData = require("./gym-seeds.json");
const moveData = require("./move-seeds.json");
const userData = require("./user-seeds.json");
const npcData = require("./npc-seeds.json");
const pokemonData = require("./pokemon-seeds.json");
const trainerData = require("./trainer-seeds.json");
const pokemonReferenceData = require("./pokemon-reference-seeds.json");

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

    await PokemonReference.bulkCreate(pokemonReferenceData);
    await Gym.bulkCreate(gymData);
    await createTrainer();

    // await Pokemon.bulkCreate(pokemonData);
    await NPC.bulkCreate(npcData);

    process.exit(0);
  } catch (err) {
    // };
    console.log(err);
  }
};

const createTrainer = async () => {
  await Move.bulkCreate(moveData);
  const newTrainer = await Trainer.create({
    id: 4,
    name: "Ash Ketchum",
    age: 16,
    profilePicUrl:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1684896179/001bulbasaur_buvbux.png",
    numWins: 32,
    numLosses: 12,
    boulder_badge: false,
    cascade_badge: false,
    thunder_badge: false,
    rainbow_badge: false,
    soul_badge: false,
    marsh_badge: false,
    volcano_badge: false,
    earth_badge: false,
  });
};

seedDatabase();
