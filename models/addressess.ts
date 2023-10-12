'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface AddressesAttributes {
  id: number;
  country: string;
  city: string;
  street: string;
  userId: number;
  orderId: number;
}

class Addresses extends Model<AddressesAttributes> implements AddressesAttributes {
  id!: number;
  country!: string;
  city!: string;
  street!: string;
  userId!: number;
  orderId!: number;
}
Addresses.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Users',
      key : 'id'
    }
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Orders',
      key : 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Addresses',
});


export default Addresses;