const Sequelize = require('sequelize');
const sequelize = new Sequelize('cows', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});


module.exports.Cows = sequelize.define('cows', {
  name: Sequelize.STRING,
  pictureUrl: Sequelize.STRING,
  description: Sequelize.STRING
});

sequelize.sync();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established succesfully');
  })
  .catch(err => {
    console.error('unabe to connect with db ', err);
  });
