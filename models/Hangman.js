const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hangman extends Model {}

Hangman.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        word: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        monster_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'monster',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hangman',
    }
);

module.exports = Hangman;