'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface WishingAttributes{
  id?: number;
  userId: number;
  productId: number;
}

class Wishing extends Model<WishingAttributes> implements WishingAttributes {
  id!: number;
  userId!: number;
  productId!: number; 
}
Wishing.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'User',
      key : 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Product',
      key : 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Wishing',
  tableName: 'Wishing',

});

export default Wishing;
