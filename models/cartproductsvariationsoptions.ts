'use strict';
import {
  Model
} from 'sequelize';

interface CPVOAttributes {
  id: number;
  cartProductId: number;
  variationOptionId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class CPVO extends Model<CPVOAttributes> implements CPVOAttributes {
    id!: number;
    cartProductId!: number;
    variationOptionId!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
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
  return CPVO;
};