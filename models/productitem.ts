'use strict';
import { Model, DataTypes } from 'sequelize';

interface ProductItemAttributes {
  id: number;
  productId: number;
  sku: string;
  qtyInStock: number;
  productImage: string;
  price: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class ProductItem extends Model<ProductItemAttributes> implements ProductItemAttributes {
    id!: number;
    productId!: number;
    sku!: string;
    qtyInStock!: number;
    productImage!: string;
    price!: number;

    static associate(models: any) {
      // Define associations here
      ProductItem.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      });
      ProductItem.hasMany(models.ProductConfiguration, {
        foreignKey: 'productItemId',
        as: 'configurations',
      });
    }
  }

  ProductItem.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qtyInStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'ProductItem',
  });

  return ProductItem;
};
