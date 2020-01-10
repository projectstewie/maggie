'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemImage = sequelize.define('ItemImage', {
    imageUrl: DataTypes.STRING,
    itemId: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {});
  ItemImage.associate = function(models) {
    // associations can be defined here

    ItemImage.belongsTo(models.Item, {
      foreignKey: 'itemId',
      as: 'item_id',
      onDelete: 'CASCADE',
    });
  };
  return ItemImage;
};