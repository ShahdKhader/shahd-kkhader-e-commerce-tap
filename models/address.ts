'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface AddressAttributes {
  id: number;
  country: string;
  city: string;
  street: string;
  userId: number;
  orderId: number;
}

class Address extends Model<AddressAttributes> implements AddressAttributes {
  id!: number;
  country!: string;
  city!: string;
  street!: string;
  userId!: number;
  orderId!: number;
}
Address.init({
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
      model: 'User',
      key : 'id'
    }
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Order',
      key : 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Address',
  tableName: 'Address',
});


export default Address;