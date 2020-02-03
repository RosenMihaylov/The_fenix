'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        unique: true
      },
      avatarUrl: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}
