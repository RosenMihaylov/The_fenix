'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlogPostCategory = sequelize.define('BlogPostCategory', {
    title: DataTypes.STRING
  }, {});
  BlogPostCategory.associate = function(models) {
    // associations can be defined here
  };
  return BlogPostCategory;
};