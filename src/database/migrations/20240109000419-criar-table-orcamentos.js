'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('orcamentos',{
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idcliente: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      desconto: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      acrescimo: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      valortotal: {
        type: Sequelize.DOUBLE,
        allowNull: false
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
    return queryInterface.dropTable('orcamentos')
  }
};
