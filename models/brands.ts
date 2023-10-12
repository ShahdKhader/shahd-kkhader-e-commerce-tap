'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize  from './sequelize';

interface BrandsAttributes{
  id: number;
  name: string;
  description: string;
}

class Brands extends Model<BrandsAttributes> implements BrandsAttributes {
  id!: number;
  name!: string;
  description!: string;
}

Brands.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Brands',
});

export default Brands;
