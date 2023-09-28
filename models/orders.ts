'use strict';
import {
  Model
} from 'sequelize';

interface OrdersAttributes {
  id: number;
  status: string;
  price: number;
  discount: number;
  discountCoupon:number;
  creationDate: Date;
  tax: number;
  delivaryFee: number;
  total: number;
  cartId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Orders extends Model<OrdersAttributes> implements OrdersAttributes {
    id!: number;
    status!: string;
    price!: number;
    discount!: number;
    discountCoupon!: number;
    creationDate!: Date;
    tax!: number;
    delivaryFee!: number;
    total!: number;
    cartId!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Orders.belongsTo(models.Cart, {
        foreignKey: 'cartId'
      });
      Orders.hasMany(models.Addresses, {
        foreignKey: 'orderId'
      });
    }
  }
  Orders.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountCoupon: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creationDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivaryFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Cart',
        key : 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};