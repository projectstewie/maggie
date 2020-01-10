'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    units: DataTypes.INTEGER,
    condition: DataTypes.ENUM('New','Like new','Good','Fair','Poor'),
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  item.associate = function(models) {
    // associations can be defined here

    Item.hasMany(models.ItemImage, {
      foreignKey: 'itemId',
      as: 'item_id',
      onDelete: 'CASCADE',
    });

    Item.hasMany(models.ItemCategory, {
      foreignKey: 'itemId',
      as: 'item_id',
      onDelete: 'CASCADE',
    });

    Item.hasMany(models.ListingItem, {
      foreignKey: 'itemId',
      as: 'item_id',
      onDelete: 'CASCADE',
    });
  };
  return Item;
};