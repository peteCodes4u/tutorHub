const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tutor extends Model {}

Tutor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },

    instrument_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'instrument',
        key: 'id'
      },
    },

    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lessonSetting: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor',
  }
);

module.exports = Tutor;