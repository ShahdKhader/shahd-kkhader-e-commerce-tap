'use strict';
import { Model, DataTypes } from 'sequelize';

interface ShippingMethodAttributes {
  id: number;
  name: string;
  description: string;
}

module.exports = (sequelize: any) => {
  class ShippingMethod extends Model<ShippingMethodAttributes> implements ShippingMethodAttributes {
    id!: number;
    name!: string;
    description!: string;

    static associate(models: any) {
      ShippingMethod.hasMany(models.ShopOrder, {
        foreignKey: 'shippingMethodId',
        as: 'orders',
      });
    }
  }
  ShippingMethod.init({
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
    modelName: 'ShippingMethod',
  });
  return ShippingMethod;
};
