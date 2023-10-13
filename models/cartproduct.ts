'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface CartProductAttributes{
  id?: number;
  productId: number;
  cartId: number;
  quantity: number;
  price: number;
}


  class CartProduct extends Model<CartProductAttributes> implements CartProductAttributes {
    id!: number;
    productId!: number;
    cartId!: number;
    quantity!: number;
    price!: number;
  }
  CartProduct.init({
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
        model: 'Product',
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
    modelName: 'CartProduct',
    tableName: 'CartProduct',

  });

export default CartProduct;
