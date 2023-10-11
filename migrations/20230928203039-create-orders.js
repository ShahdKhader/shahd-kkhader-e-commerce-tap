'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {  
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {  
        type: Sequelize.INTEGER,  
        allowNull: false
      },
      discount: {  
        type: Sequelize.INTEGER,  
        allowNull: false
      },
      discountCoupon: {  
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      creationDate: { 
        type: Sequelize.DATE
      },
      tax: {  
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      deliveryFee: {  
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {  
        type: Sequelize.INTEGER,  
        allowNull: false
      },
      cartId: { 
        type: Sequelize.INTEGER, 
        allowNull: false
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
    await queryInterface.dropTable('Orders');
  }
};