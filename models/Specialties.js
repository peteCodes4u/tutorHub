const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Specialties extends Model {}

Specialties.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        specialty: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'specialties',
    }

);

module.exports = Specialties;