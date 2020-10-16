'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listings = sequelize.define('Listings', {
    sellerId: DataTypes.INTEGER,
    header: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    active: DataTypes.BOOLEAN,
    deleted: DataTypes.BOOLEAN
  }, {});
  listings.associate = function(models) {
    // associations can be defined here

    Listings.hasMany(models.ListingsItem, {
      foreignKey: 'ListingsId',
      as: 'listings_id',
      onDelete: 'CASCADE',
    });

    Listings.belongsTo(models.User, {
      foreignKey: 'UserId',
      as: 'seller_id',
      onDelete: 'CASCADE',
    });
    
  };
  return Listings;
};