const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

dotenv.config();

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_PORT,
    DB_DIALECT
} = process.env;

if (!DB_USERNAME || !DB_PASSWORD || !DB_DATABASE || !DB_HOST || !DB_PORT || !DB_DIALECT) {
    throw new Error('Missing required environment variables for database configuration.');
}

const dbConnect = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: false,
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timezone: '+05:30'
});


module.exports = dbConnect;