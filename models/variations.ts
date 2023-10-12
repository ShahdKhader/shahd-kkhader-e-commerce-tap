'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface VariationsAttributes{
  id: number;
  name: string;
  description: string;
  productId: number;
}

class Variations extends Model<VariationsAttributes> implements VariationsAttributes {
  id!: number;
  name!: string;
  description!: string;
  productId!: number; 

}
Variations.init({
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
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Products',
      key : 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Variations',
});

  export default Variations;
