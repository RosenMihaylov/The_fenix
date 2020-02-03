'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      blogCreatorId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      blogPostCategoryId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BlogPosts')
  }
}
