'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cart_item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cart_id: {
        type: Sequelize.INTEGER
      },
      listing_id: {
        type: Sequelize.INTEGER
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cart_item');
  }
};
