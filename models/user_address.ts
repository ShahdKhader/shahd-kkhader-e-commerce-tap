'use strict';
import { Model, DataTypes } from 'sequelize';

interface UserAddressAttributes {
  userId: number;
  addressId: number;
  isDefault: number;
}

module.exports = (sequelize: any) => {
  class UserAddress extends Model<UserAddressAttributes> implements UserAddressAttributes {
    userId!: number;
    addressId!: number;
    isDefault!: number;

    static associate(models: any) {
      // define association here
    }
  }
  UserAddress.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SiteUser',
        key: 'id'
      }
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Address',
        key: 'id'
      }
    },
    isDefault: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'UserAddress',
  });
  return UserAddress;
};
