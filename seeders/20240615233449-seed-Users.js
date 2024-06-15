'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
     {
      firstName: 'Felipe',
      lastName: 'Almeida',
      email: 'felipe.almeida@gmail.com',
      password: '123456',
      createdAt: new Date(),
      updateAt: new Date()
     }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',{firstName: 'Felipe'}, {});
    
  }
};