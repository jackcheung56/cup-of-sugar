'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('borrows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      itemId: {
        type: Sequelize.INTEGER,
        field: 'item_id',
        references: {
          model: 'items',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('Returned', 'Active', 'Overdue')
      },
      duration: {
        type: Sequelize.STRING
      },
      accepted: {
        type: Sequelize.BOOLEAN
      },
      photo: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      contactId: {
        type: Sequelize.INTEGER,
        field: 'contact_id'
      },
      product: {
        type: Sequelize.STRING
      },
      requester: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
      form: {
        type: Sequelize.STRING
      },
      holder: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('borrows');
  }
};