const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Certifications extends Model {}

Certifications.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    certification_name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "certifications",
  }
);

module.exports = Certifications;
