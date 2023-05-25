const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Attack extends Model {}

Attack.init(
  {
    // ** id will auto generate
    attack_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // },
    },
    attack_power: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    attack_accuracy: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    //**trainer foreign key: will auto generate
    //**pokemon foreign key: will auto generate
  },
  {
    sequelize,
  }
);

module.exports = Attack;
