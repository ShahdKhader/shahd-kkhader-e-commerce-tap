'use strict';
import { Model, DataTypes } from 'sequelize';

interface PaymentTypeAttributes {
  id: number;
  name: string;
  description: string;
}

module.exports = (sequelize: any) => {
  class PaymentType extends Model<PaymentTypeAttributes> implements PaymentTypeAttributes {
    id!: number;
    name!: string;
    description!: string;

    static associate(models: any) {
      PaymentType.hasMany(models.UserPaymentMethod, {
        foreignKey: 'paymentTypeId',
        as: 'userPaymentMethods',
      });
    }
  }
  PaymentType.init({
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
    modelName: 'PaymentType',
  });
  return PaymentType;
};
