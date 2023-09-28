'use strict';
import {
  Model
} from 'sequelize';

interface AddressesAttributes {
  id: number;
  country: string;
  city: string;
  street: string;
  userId: number;
  orderId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Addresses extends Model<AddressesAttributes> implements AddressesAttributes {
    id!: number;
    country!: string;
    city!: string;
    street!: string;
    userId!: number;
    orderId!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Addresses.belongsTo(models.Orders, {
        foreignKey: 'orderId'
      });
      Addresses.belongsTo(models.Users, {
        foreignKey: 'userId'
      });
    }
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
  return Addresses;
};