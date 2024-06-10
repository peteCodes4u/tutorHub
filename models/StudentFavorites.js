const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class StudentFavorites extends Model {}

StudentFavorites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "student",
        key: "id",
      },
    },

    tutor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tutor",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "student_favorites",
  }
);

module.exports = StudentFavorites;
