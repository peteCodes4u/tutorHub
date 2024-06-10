const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class TutorComments extends Model {}

TutorComments.init(
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

    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: "tutor_comments",
  }
);

module.exports = TutorComments;
