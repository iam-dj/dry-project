const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Gym extends Model {}

Gym.init(
  {
    // ** id will auto generate
    name: {
      type: DataTypes.STRING,
      allowNull: false,

      // validate: {
      //   isAlpha: true,
      // },
    },
    gym_master: {
      type: DataTypes.STRING,
      allowNull: false,
      //this will be from our npc table
    },
    badge_name: {
      //put badge img link here?
      type: DataTypes.STRING,
      allowNull: false,
    },
    //**foreign key: will auto generate
  },
  {
    sequelize,
    timestamps: false,
    modelName: "gym",
    underscored: true,
  }
);

module.exports = Gym;
