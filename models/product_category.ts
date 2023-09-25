'use strict';
import { Model, DataTypes } from 'sequelize';

interface ProductCategoryAttributes {
  id: number;
  parentCategoryId: number;
  categoryName: string;
}
module.exports = (sequelize: any) => {
  class ProductCategory extends Model<ProductCategoryAttributes> implements ProductCategoryAttributes {
    id!: number;
    parentCategoryId!: number;
    categoryName!: string;

    static associate(models: any) {
      ProductCategory.belongsTo(models.product_category, {
        foreignKey: 'parentCategoryId',
        as: 'parentCategory',
      });

      ProductCategory.hasMany(models.product_category, {
        foreignKey: 'parentCategoryId',
        as: 'subCategories',
      });

      ProductCategory.belongsToMany(models.promotion, {
        through: 'promotion_category',
      });
    }
  }
  ProductCategory.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parentCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ProductCategory',
  });
  return ProductCategory;
};
