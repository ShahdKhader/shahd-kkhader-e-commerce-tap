'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface VariationAttributes{
  id: number;
  name: string;
  description: string;
  productId: number;
}

class Variation extends Model<VariationAttributes> implements VariationAttributes {
  id!: number;
  name!: string;
  description!: string;
  productId!: number; 

}
Variation.init({
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
      model: 'Product',
      key : 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Variation',
  tableName: 'Variation',

});

  export default Variation;
