const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokemon extends Model {}

Pokemon.init(
  {
    // ** id will auto generate

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondary_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    evolutionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tier: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isCaught: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // move_1: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "moves",
    //     key: "id",
    //   },
    // },
    // move_2: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "moves",
    //     key: "id",
    //   },
    // },
    // move_3: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "moves",
    //     key: "id",
    //   },
    // },
    // move_4: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "moves",
    //     key: "id",
    //   },
    // },
    //**attack foreign keys: will auto generate
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Pokemon",
    tableName: "pokemon",
    underscored: true,
  }
);

module.exports = Pokemon;
