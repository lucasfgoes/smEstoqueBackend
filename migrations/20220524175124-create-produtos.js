'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      custo: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      minimo: {
        type: Sequelize.STRING,
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};