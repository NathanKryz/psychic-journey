const User = require('./User');
const Character = require('./Character');
const Monster = require('./Monster');
const Hangman = require('./Hangman');

// connecting monster model with words model using primary key
Monster.hasMany(Hangman, {
  foreignKey: 'monster_id',
});

Hangman.belongsTo(Monster, {
  foreignKey: 'monster_id',
});

module.exports = { User, Character, Monster, Hangman };