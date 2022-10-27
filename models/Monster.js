const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Monster extends Model {}

Monster.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        design: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hitpoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'monster',
    }
);

module.exports = Monster;