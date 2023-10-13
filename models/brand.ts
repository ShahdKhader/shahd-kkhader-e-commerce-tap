'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize  from './sequelize';

interface BrandAttributes{
  id: number;
  name: string;
  description: string;
}

class Brand extends Model<BrandAttributes> implements BrandAttributes {
  id!: number;
  name!: string;
  description!: string;
}

Brand.init({
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
  modelName: 'Brand',
  tableName: 'Brand',
});

export default Brand;
