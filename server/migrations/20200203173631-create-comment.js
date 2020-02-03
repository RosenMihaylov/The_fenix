'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        allowNull: false,
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
      blogPostId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      writerId: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comments')
  }
}
