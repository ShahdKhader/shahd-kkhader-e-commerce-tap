'use strict';
import { Model, DataTypes } from 'sequelize';

interface ShopOrderAttributes {
  id: number;
  userId: number;
  orderDate: Date;
  paymentMethodId: number;
  shippingAddressId: number;
  shippingMethodId: number;
  orderTotal: number;
  orderStatusId: number;
}

module.exports = (sequelize: any) => {
  class ShopOrder extends Model<ShopOrderAttributes> implements ShopOrderAttributes {
    id!: number;
    userId!: number;
    orderDate!: Date;
    paymentMethodId!: number;
    shippingAddressId!: number;
    shippingMethodId!: number;
    orderTotal!: number;
    orderStatusId!: number;

    static associate(models: any) {
      ShopOrder.belongsTo(models.SiteUser, {
        foreignKey: 'userId',
        as: 'user',
      });

      ShopOrder.belongsTo(models.ShippingMethod, {
        foreignKey: 'shippingMethodId',
        as: 'shippingMethod',
      });

      ShopOrder.belongsTo(models.OrderStatus, {
        foreignKey: 'orderStatusId',
        as: 'orderStatus',
      });

      ShopOrder.hasMany(models.OrderLine, {
        foreignKey: 'orderId',
        as: 'orderLines',
      });
    }
  }
  ShopOrder.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SiteUser',
        key: 'id'
      }
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PaymentMethod',
        key: 'id'
      }
    },
    shippingAddressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Address',
        key: 'id'
      }
    },
    shippingMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ShippingMethod',
        key: 'id'
      }
    },
    orderTotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OrderStatus',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ShopOrder',
  });
  return ShopOrder;
};
