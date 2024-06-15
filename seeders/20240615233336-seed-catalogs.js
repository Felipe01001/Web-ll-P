'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Catalogs', [{
      modelo: 'Modelo 1',
      time: 'Time 1',
      ano: 2021,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelo: 'Modelo 2',
      time: 'Time 2',
      ano: 2022,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Catalogs', null, {});
  }
};
