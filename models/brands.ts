'use strict';
import {
  Model
} from 'sequelize';

interface BrandsAttributes{
  id: number;
  name: string;
  description: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Brands extends Model<BrandsAttributes> implements BrandsAttributes {
    id!: number;
    name!: string;
    description!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Brands.hasMany(models.Products, {
        foreignKey: 'brandId',
      })
    }
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
  return Brands;
};