const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    // ** id will auto generate
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAlpha: true,
      // },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //**foreign key: will auto generate
  },
  {
    sequelize,
    underscored: true,
  }
);

module.exports = User;
