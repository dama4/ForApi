const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('b3h7kdisfbuqfbvbasaf', 'uxltohhijgadjodb', 'infYxZIuoy7fOkINn943', {
  host: 'b3h7kdisfbuqfbvbasaf-mysql.services.clever-cloud.com',
  dialect: 'mysql'
});

module.exports = sequelize;
