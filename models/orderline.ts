'use strict';
import { Model, DataTypes } from 'sequelize';

interface OrderLineAttributes {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
}

module.exports = (sequelize: any) => {
  class OrderLine extends Model<OrderLineAttributes> implements OrderLineAttributes {
    id!: number;
    orderId!: number;
    productId!: number;
    quantity!: number;
    unitPrice!: number;

    static associate(models: any) {
      OrderLine.belongsTo(models.ShopOrder, {
        foreignKey: 'orderId',
        as: 'order',
      });

      OrderLine.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      });
    }
  }
  OrderLine.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ShopOrder',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unitPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderLine',
  });
  return OrderLine;
};
