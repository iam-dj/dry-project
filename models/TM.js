const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TM extends Model {}

TM.init(
  {
    // ** id will auto generate
    TM_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inInventory: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    move: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "TM",
    underscored: true,
  }
);

module.exports = TM;
