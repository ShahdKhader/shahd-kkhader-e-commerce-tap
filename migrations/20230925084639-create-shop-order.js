'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShopOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      orderDate: {
        type: Sequelize.DATE
      },
      paymentMethodId: {
        type: Sequelize.INTEGER
      },
      shippingAddress: {
        type: Sequelize.INTEGER
      },
      shippingMethod: {
        type: Sequelize.INTEGER
      },
      orderTotal: {
        type: Sequelize.INTEGER
      },
      orderStatus: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ShopOrders');
  }
};