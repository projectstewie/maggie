'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemCategory = sequelize.define('ItemCategory', {
    itemId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {});
  ItemCategory.associate = function(models) {
    // associations can be defined here
    ItemCategory.belongsTo(models.Item, {
      foreignKey: 'itemId',
      as: 'item_id',
      onDelete: 'CASCADE',
    });

    ItemCategory.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category_id',
      onDelete: 'CASCADE',
    });

  };
  return ItemCategory;
};