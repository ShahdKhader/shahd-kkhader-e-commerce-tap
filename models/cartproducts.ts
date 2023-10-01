'use strict';
import {
  Model
} from 'sequelize';

interface CartProductsAttributes{
  id: number;
  productId: number;
  cartId: number;
  quantity: number;
  price: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class CartProducts extends Model<CartProductsAttributes> implements CartProductsAttributes {
    id!: number;
    productId!: number;
    cartId!: number;
    quantity!: number;
    price!: number;
    static associate(models: any) {
      // define association here
     
      CartProducts.belongsToMany(models.VariationsOptions, {
        through: 'CPVO',
        foreignKey: 'cartProductId', 
        otherKey: 'variationOptionId',
      });

    }
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
  return CartProducts;
};