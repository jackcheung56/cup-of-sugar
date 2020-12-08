'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      isBorrowed: {
        type: Sequelize.BOOLEAN,
        field: 'is_borrowed',
        allowNull: false,
        defaultValue: true
      },
      category: {
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.INTEGER,
        field: 'owner_id',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      image: {
        type: Sequelize.STRING
      },
      condition: {
        type: Sequelize.ENUM('Great', 'Acceptable', 'Bad')
      },
      description: {
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
    await queryInterface.dropTable('items');
  }
};