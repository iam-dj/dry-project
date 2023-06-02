const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, Trainer } = require("../../models");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    // const
    const users = await User.findAll({
      include: [{ model: Trainer }],
    });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  }
});
// router.get("/:id", async (req, res) => {
//   try {
//     // const
//     const users = await User.findAll({
//       where: {id: req.params.id},
//       include: [{ model: Trainer }],
//     });
//     res.json(users);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ msg: "error occurred", err });
//   }
// });

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(401).json({ msg: "invalid credentials" });
      } else if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
        return res.status(401).json({ msg: "invalid credentials" });
      } else {
        const token = jwt.sign(
          {
            username: foundUser.username,
            userId: foundUser.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "2h",
          }
        );
        console.log(token);
        return res.json({
          token: token,
          user: foundUser,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error", err });
    });
});

router.post("/", (req, res) => {
  //:create user, sign jwt
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((newser) => {
      const token = jwt.sign(
        {
          username: newser.username,
          userId: newser.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
      res.json({
        token,
        user: newser,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error", err });
    });
});

router.get("/verifytoken", (req, res) => {
  //: get userdata from jwt, verify jwt
  console.log(req.headers);
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    User.findByPk(data.userId).then((user) => {
      res.json(user);
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({ msg: "invalid token", err });
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
    res.status(200).json({ message: "user deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
