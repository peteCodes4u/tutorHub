const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TutorCertifications extends Model {}

TutorCertifications.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        tutor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tutor',
                key: 'id'
            }
        },
        certification_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'certifications',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tutor_certifications'
    }
);

module.exports = TutorCertifications;