const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class TutorSpecialties extends Model {}

TutorSpecialties.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    tutor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tutor",
        key: "id",
      },
    },
    specialties_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "specialties",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "tutor_specialties",
  }
);

module.exports = TutorSpecialties;
