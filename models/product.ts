'use strict';
import { Model, DataTypes } from 'sequelize';

interface ProductAttributes {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  productImage: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    id!: number;
    categoryId!: number;
    name!: string;
    description!: string;
    productImage!: string;

    static associate(models: any) {
      // Define associations here
      Product.belongsTo(models.ProductCategory, {
        foreignKey: 'categoryId',
        as: 'category',
      });
      Product.hasMany(models.ProductItem, {
        foreignKey: 'productId',
        as: 'items',
      });
    }
  }

  Product.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ProductCategory',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  
  return Product;
};
