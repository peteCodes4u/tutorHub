const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class TutorPrices extends Model {}

TutorPrices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tutor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tutor",
        key: "id",
      },
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "tutor_prices",
  }
);

module.exports = TutorPrices;
