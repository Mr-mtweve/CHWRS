const { Sequelize } = require('sequelize');
require('dotenv').config();

// Database connection
const sequelize = new Sequelize(
  process.env.DB_NAME || 'chwrs_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timestamps: true,
    underscored: true
  }
);

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection established successfully');
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });

module.exports = { sequelize };
