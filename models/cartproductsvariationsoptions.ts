'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface CPVOAttributes {
  id: number;
  cartProductId: number;
  variationOptionId: number;
}

class CPVO extends Model<CPVOAttributes> implements CPVOAttributes {
  id!: number;
  cartProductId!: number;
  variationOptionId!: number;
}
CPVO.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  cartProductId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'CartProducts',
      key : 'id'
    }
  },
  variationOptionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'VariationsOptions',
      key : 'id'
    }
  }
}, {

  sequelize,
  modelName: 'CPVO',
});

export default CPVO;
