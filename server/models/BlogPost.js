'use strict'
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      imageUrl: DataTypes.TEXT
    },
    {}
  )
  BlogPost.associate = function(models) {
    BlogPost.belongsTo(User, {
      foreignKey: blogCreatorId
    }),
      BlogPost.belongsTo(BlogPostCategory, {
        foreignKey: blogPostCategoryId
      })
  }
  return BlogPost
}
