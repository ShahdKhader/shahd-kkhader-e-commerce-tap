'use strict';
import { Model, DataTypes } from 'sequelize';

interface OrderStatusAttributes {
  id: number;
  name: string;
  description: string;
}

module.exports = (sequelize: any) => {
  class OrderStatus extends Model<OrderStatusAttributes> implements OrderStatusAttributes {
    id!: number;
    name!: string;
    description!: string;

    static associate(models: any) {
      OrderStatus.hasMany(models.ShopOrder, {
        foreignKey: 'orderStatusId',
        as: 'orders',
      });
    }
  }
  OrderStatus.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderStatus',
  });
  return OrderStatus;
};
