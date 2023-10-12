'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface OrdersAttributes {
  id?: number;
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

export default Orders;
