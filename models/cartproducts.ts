'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface CartProductsAttributes{
  id?: number;
  productId: number;
  cartId: number;
  quantity: number;
  price: number;
}


  class CartProducts extends Model<CartProductsAttributes> implements CartProductsAttributes {
    id!: number;
    productId!: number;
    cartId!: number;
    quantity!: number;
    price!: number;
  }
  CartProducts.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Products',
        key : 'id'
      }
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Cart',
        key : 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'CartProducts',
  });

export default CartProducts;
