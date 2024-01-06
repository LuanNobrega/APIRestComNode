'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('usuarios',{
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
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      idPerfil: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      dataInativacao:{
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true
      },
      createAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updateAt:{
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('usuarios')
  }
};
