const lodash = require('lodash')
const Faker = require('faker')
const User = require('../models/User')
('use strict')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          userName: Faker.name.findName(),
          password: Faker.internet.password(),
          email: Faker.internet.email(),
          avatarUrl: Faker.image.imageUrl(),
          createdAt: Faker.date.past(),
          updatedAt: Faker.date.past()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
