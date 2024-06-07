const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Favorites extends Model {}

Favorites.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        favorite_tutor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timeStamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorites',
    }
);

module.exports = Favorites;