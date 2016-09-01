var Sequelize = require('sequelize');
var db = require('./_db');

module.exports = db.define('puppy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  favoriteFeature: {
    type: Sequelize.STRING,
    allowNull: false
  }
});