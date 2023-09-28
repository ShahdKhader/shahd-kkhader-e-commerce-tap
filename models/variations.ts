'use strict';
import {
  Model
} from 'sequelize';

interface VariationsAttributes{
  id: number;
  name: string;
  description: string;
  productId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Variations extends Model<VariationsAttributes> implements VariationsAttributes {
    id!: number;
    name!: string;
    description!: string;
    productId!: number; 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Variations.belongsTo(models.Products, {
        foreignKey: 'productId',
      });
      Variations.hasMany(models.VariationsOptions,{
        foreignKey: 'variationId',
      });
    }
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
  return Variations;
};