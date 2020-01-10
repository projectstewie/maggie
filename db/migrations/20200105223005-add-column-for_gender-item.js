'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.addColumn(
      'item',
      'for_gender',
      Sequelize.ENUM('boy','girl','unisex','other','none'),
      {
        defaultValue: 'none'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('item', 'for_gender');
  }
};
