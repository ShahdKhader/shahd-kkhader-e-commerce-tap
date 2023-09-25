'use strict';
import { Model, DataTypes } from 'sequelize';

interface AddressAttributes {
  id: string;
  unitNumber: string;
  streetNumber: string;
  addressLine: string;
  city: string;
  region: string;
  postalCode: string;
}

module.exports = (sequelize: any) => {
  class Address extends Model<AddressAttributes> implements AddressAttributes {
    id!: string;
    unitNumber!: string;
    streetNumber!: string;
    addressLine!: string;
    city!: string;
    region!: string;
    postalCode!: string;

    static associate(models: any) {
      // define association here
      Address.belongsToMany(models.site_user, {
        through: 'user_address'
      });
    }
  }
  Address.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    unitNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streetNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressLine: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
