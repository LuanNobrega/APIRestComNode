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
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpfoucnpj: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observacao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdat: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        field: 'createdat'
      },
      updatedat:{
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true,
        field: 'updatedat'
      }


    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('prestadores')
  }
};
