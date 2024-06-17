const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Platform extends Model {}

Platform.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        platform_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'platform',

    }
);
module.exports = Platform;