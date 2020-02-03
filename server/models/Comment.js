'use strict'
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'comment',
    {
      text: DataTypes.TEXT
    },
    {}
  )
  Comment.associate = function(models) {
    Comment.belognsTo(BlogPost, {
      foreignKey: blogPostId
    }),
      Comment.belognsTo(User, {
        foreignKey: writerId
      })
  }
  return Comment
}
