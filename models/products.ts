'use strict';
import {
  DataTypes,
  Model
} from 'sequelize';
import sequelize from 'sequelize/types/sequelize';
import models from '.';

interface ProductsAttributes {
  id: number;
  categoryId: number;
  brandId: number;
  name: string;
  description: string;
  price: number;
  comparePrice: number;
  rating: number | GLfloat;
  quantity: number;
  discount: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Products extends Model<ProductsAttributes> implements ProductsAttributes {
    id!: number;
    categoryId!: number;
    brandId!: number;
    name!: string;
    description!: string;
    price!: number;
    comparePrice!: number;
    rating!: number | GLfloat;
    quantity!: number;
    discount!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      //define association here
      Products.belongsTo(models.Brands, {
        foreignKey: 'brandId',
      });
      Products.belongsTo(models.Categories, {
        foreignKey: 'categoryId',
      });
      Products.belongsToMany(models.Cart, {
        foreignKey: 'productId',
        through: 'CartProducts'
      });
      Products.hasMany(models.Wishing, {
        foreignKey: 'productId',
      });
      Products.hasMany(models.Variations, {
        foreignKey: 'productId',
      });
    }
  }
  Products.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Categories',
        key : 'id'
      }
      
    },
    brandId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Brands',
        key : 'id'
      }
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    comparePrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
     
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false, 
    }
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};