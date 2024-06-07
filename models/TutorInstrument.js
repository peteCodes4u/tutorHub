const { Model, DataTypes } = require('sequelize');

const sequelize = require("../config/connection.js");

class TutorInstrument extends Model {}

TutorInstrument.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    tutor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tutor',
            key: 'id'
        },
    },
    instrument_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'instrument',
            key: 'id'
        },
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutor_instrument'
}
);

module.exports = TutorInstrument;