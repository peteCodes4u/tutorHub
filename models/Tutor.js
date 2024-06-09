const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Tutor extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Tutor.init(
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
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    virtual: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instruments: {
      type: DataTypes.STRING,
      allowNull: false,
    }
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