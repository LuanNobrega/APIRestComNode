'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('status',{
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdat: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        field: 'create_at'
      },
      updatedat:{
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true,
        field: 'update_at'
      }


    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('status')
  }
};
