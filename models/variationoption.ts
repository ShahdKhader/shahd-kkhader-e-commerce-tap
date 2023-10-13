'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface VariationOptionAttributes{
  id: number;
  name: string;
  description: string;
  variationId: number;
}


class VariationOption extends Model<VariationOptionAttributes> implements VariationOptionAttributes {
  id!: number;
  name!: string;
  description!: string;
  variationId!: number;
}
VariationOption.init({
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
      model: 'Variation',
      key : 'id'
    }
  }  }, {
  sequelize,
  modelName: 'VariationOption',
  tableName: 'VariationOption',

});

export default VariationOption;
