'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('canceled','draft','pending_buyer','pending_seller','rejected_by_seller','rejected_by_buyer','closed')
      },
      carrier_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tracking_id: {
        allowNull: false,
        type: Sequelize.TEXT
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order');
  }
};
