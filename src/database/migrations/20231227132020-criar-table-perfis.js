'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('perfis',{
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        field: 'create_at'
      },
      updateAt:{
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true,
        field: 'update_at'
      }


    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('perfis')
  }
};
