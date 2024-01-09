'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('prestadores',{
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cpfoucnpj: {
        type: Sequelize.STRING,
        allowNull: true
      },
      observacao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      criadoem: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        field: 'criadoem'
      },
      atualizadoem:{
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true,
        field: 'atualizadoem'
      }


    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('prestadores')
  }
};
