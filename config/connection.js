// setup sequelize and dotenv environment
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// setup database to allow to deploy to heroku
// allow .env file to be used for private data
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
