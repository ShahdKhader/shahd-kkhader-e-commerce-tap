'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface VariationsOptionsAttributes{
  id: number;
  name: string;
  description: string;
  variationId: number;
}


class VariationsOptions extends Model<VariationsOptionsAttributes> implements VariationsOptionsAttributes {
  id!: number;
  name!: string;
  description!: string;
  variationId!: number;
}
VariationsOptions.init({
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
  variationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Variations',
      key : 'id'
    }
  }  }, {
  sequelize,
  modelName: 'VariationsOptions',
});

export default VariationsOptions;
