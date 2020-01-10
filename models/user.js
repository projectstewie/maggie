'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Item, {
      foreignKey: 'userId',
      sourceKey: 'id',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Listing, {
      foreignKey: 'userId',
      sourceKey: 'id',
      as: 'seller_id',
      onDelete: 'CASCADE',
    });

  };
  return User;
};