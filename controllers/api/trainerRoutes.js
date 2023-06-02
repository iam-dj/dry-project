const router = require("express").Router();
const { User, Pokemon, Gym, NPC, Trainer, Move } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const trainers = await Trainer.findAll({
      include: [
        {
          model: Pokemon,
          as: "pokemons",
          include: [
            { model: Move, as: "move1" },
            { model: Move, as: "move2" },
            { model: Move, as: "move3" },
            { model: Move, as: "move4" },
          ],
        },
      ],
    });
    res.status(200).json(trainers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json({message:"user deleted"});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    res.status(200).json(trainer);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// routes to update the badge boolean
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { boulder_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { cascade_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { thunder_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { rainbow_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { soul_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { marsh_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { volcano_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});
router.put("/trainers/:id", async (req, res) => {
  try {
    const updatedTrainer = await Trainer.update(
      { earth_badge: true },
      { where: { id: req.params.id } }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ msg: "Trainer not found" });
    }
    return res.status(200).json(updatedTrainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
