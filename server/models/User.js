'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      avatarUrl: DataTypes.TEXT,
      role: DataTypes.STRING
    },
    {}
  )
  User.associate = function(models) {
    User.hasMany(BlogPost), User.hasMany(Comment)
  }
  return User
}
