const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

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
    hooks: {
      beforeCreate: (userObj) => {
        userObj.password = bcrypt.hashSync(userObj.password, 5);
        return userObj;
      },
    },
  }
);

module.exports = User;
