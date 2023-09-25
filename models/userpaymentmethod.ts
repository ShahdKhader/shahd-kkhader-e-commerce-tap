'use strict';
import { Model, DataTypes } from 'sequelize';

interface UserPaymentMethodAttributes {
  id: number;
  userId: number;
  paymentTypeId: number;
  cardNumber: string;
  cardHolderName: string;
  expirationDate: Date;
}

module.exports = (sequelize: any) => {
  class UserPaymentMethod extends Model<UserPaymentMethodAttributes> implements UserPaymentMethodAttributes {
    id!: number;
    userId!: number;
    paymentTypeId!: number;
    cardNumber!: string;
    cardHolderName!: string;
    expirationDate!: Date;

    static associate(models: any) {
      UserPaymentMethod.belongsTo(models.SiteUser, {
        foreignKey: 'userId',
        as: 'user',
      });

      UserPaymentMethod.belongsTo(models.PaymentType, {
        foreignKey: 'paymentTypeId',
        as: 'paymentType',
      });
    }
  }
  UserPaymentMethod.init({
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
    paymentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PaymentType',
        key: 'id'
      }
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cardHolderName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserPaymentMethod',
  });
  return UserPaymentMethod;
};
