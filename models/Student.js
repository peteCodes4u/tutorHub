const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    firstName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    lastName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
  }
);

module.exports = Student;