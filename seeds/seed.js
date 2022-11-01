const sequelize = require('../config/connection');
const { User, Character, Monster, Hangman } = require('../models');

const userData = require('./user.json');
const characterData = require('./characters.json');
const monsterData = require('./monster.json');
const hangmanWords = require('./words.json');

// seeding all .json data into sql database
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    await Character.bulkCreate(characterData);
    await Monster.bulkCreate(monsterData);
    await Hangman.bulkCreate(hangmanWords);

    process.exit(0);
};

seedDatabase();
