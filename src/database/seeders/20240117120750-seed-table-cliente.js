'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clientes', 
    [
        {
          nome: 'Luan Nobrega',
          email:"luansnobrega@gmail.com",
          cpfoucnpj:"12345678901",
          telefone: "21985522336"
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clientes');
  }
};