const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../../models");

//findall
router.get("/", (req, res) => {
  Gym.findAll({
    include: [Pokemon, Move],
  })
    .then((gym) => {
      res.json(gym);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "Uh oh, that gym doesnt exist!", err });
    });
});

router.get("/:id", async (req, res) => {
  try {
    const gym = await Gym.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    res.status(200).json(gym);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//search gyms by name
router.get("/:name", async (req, res) => {
  try {
    const dbGymData = await Gym.findAll({
      where: { name: req.params.name },
    });
    res.status(200).json(dbGymData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search gyms by gym_master
router.get("/:gym_master", async (req, res) => {
  try {
    const dbGymData = await Gym.findAll({
      where: { gym_master: req.params.gym_master },
    });
    res.status(200).json(dbGymData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//search gyms by badge_name
router.get("/:badge_name", async (req, res) => {
  try {
    const dbGymData = await Gym.findAll({
      where: { badge_name: req.params.badge_name },
    });
    res.status(200).json(dbGymData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
