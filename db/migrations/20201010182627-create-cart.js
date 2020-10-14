'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cart', {
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
     status: {
       allowNull: false,
       type: Sequelize.ENUM('open','payment_processing','canceled','closed')
     },
     cart_total: {
      allowNull: false,
      type: Sequelize.FLOAT
     }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cart');
  }
};
