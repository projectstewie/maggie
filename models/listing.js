'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    sellerId: DataTypes.INTEGER,
    header: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    active: DataTypes.BOOLEAN,
    deleted: DataTypes.BOOLEAN
  }, {});
  listing.associate = function(models) {
    // associations can be defined here

    Listing.hasMany(models.ListingItem, {
      foreignKey: 'ListingId',
      as: 'listing_id',
      onDelete: 'CASCADE',
    });

    Listing.belongsTo(models.User, {
      foreignKey: 'UserId',
      as: 'seller_id',
      onDelete: 'CASCADE',
    });
    
  };
  return Listing;
};