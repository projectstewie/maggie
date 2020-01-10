'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListingItem = sequelize.define('ListingItem', {
    itemId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {});
  ListingItem.associate = function(models) {
    // associations can be defined here

    ListingItem.belongsTo(models.Listing, {
      foreignKey: 'ListingId',
      as: 'listing_id',
      onDelete: 'CASCADE',
    });

    ListingItem.hasOne(models.Item, {
      foreignKey: 'ItemId',
      as: 'item_id',
      onDelete: 'CASCADE',
    });
  };
  return ListingItem;
};