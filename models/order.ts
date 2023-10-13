'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface OrderAttributes {
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

class Order extends Model<OrderAttributes> implements OrderAttributes {
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
Order.init({
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
  modelName: 'Order',
  tableName: 'Order',

});

export default Order;
