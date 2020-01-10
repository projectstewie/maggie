'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('item_category', ['item_id'], {
      type: 'FOREIGN KEY',
      name: 'item_category_item_item_id_fkey',
      references: {
        table: 'item',
        field: 'id'
      },
      onDelete: 'CASCADE'
    })
    .then(() => queryInterface.addConstraint('item', ['user_id'], {
      type: 'FOREIGN KEY',
      name: 'item_user_user_id_fkey',
      references: {
        table: 'user',
        field: 'id'
      },
      onDelete: 'CASCADE'
    }))
    .then(() => queryInterface.addConstraint('item_category', ['category_id'], {
      type: 'FOREIGN KEY',
      name: 'item_category_category_category_id_fkey',
      references: {
        table: 'category',
        field: 'id'
      },
      onDelete: 'CASCADE'
    }))
    .then(() => queryInterface.addConstraint('item_image', ['item_id'], {
      type: 'FOREIGN KEY',
      name: 'item_image_item_item_id_fkey',
      references: {
        table: 'item',
        field: 'id'
      },
      onDelete: 'CASCADE'
    }))
    .then(() => queryInterface.addConstraint('listing', ['seller_id'], {
      type: 'FOREIGN KEY',
      name: 'listing_user_seller_id_fkey',
      references: {
        table: 'user',
        field: 'id'
      },
      onDelete: 'CASCADE'
    }))
    .then(() => queryInterface.addConstraint('listing_item', ['listing_id'], {
      type: 'FOREIGN KEY',
      name: 'listing_item_listing_listing_id_fkey',
      references: {
        table: 'listing',
        field: 'id'
      },
      onDelete: 'CASCADE'
    }))
    .then(() => queryInterface.addConstraint('listing_item', ['item_id'], {
      type: 'FOREIGN KEY',
      name: 'listing_item_item_item_id_fkey',
      references: {
        table: 'item',
        field: 'id'
      },
      onDelete: 'CASCADE'
    }));
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
