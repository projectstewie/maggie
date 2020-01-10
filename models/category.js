'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    deleted: DataTypes.BOOLEAN
  }, {});
  category.associate = function(models) {
    // associations can be defined here
    
    Category.hasMany(models.ItemCategory, {
      foreignKey: 'categoryId',
      sourceKey: 'id',
      onDelete: 'CASCADE',
    });
  };
  return Category;
};