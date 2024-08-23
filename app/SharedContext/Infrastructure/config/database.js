const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    database_name: 'notifications',
    username: 'root',
    password: 'root',
    logging: false, // Puedes habilitarlo si quieres ver las consultas SQL en la consola
});

module.exports = sequelize;
