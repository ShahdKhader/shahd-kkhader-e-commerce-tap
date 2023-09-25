'use strict';
import { Model, DataTypes } from 'sequelize';

interface ProductConfigurationAttributes {
  productItemId: number;
  variationOptionId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class ProductConfiguration extends Model<ProductConfigurationAttributes> implements ProductConfigurationAttributes {
    productItemId!: number;
    variationOptionId!: number;

    static associate(models: any) {
      // Define associations here
      ProductConfiguration.belongsTo(models.ProductItem, {
        foreignKey: 'productItemId',
        as: 'productItem',
      });
      ProductConfiguration.belongsTo(models.VariationOption, {
        foreignKey: 'variationOptionId',
        as: 'variationOption',
      });
    }
  }

  ProductConfiguration.init({
    productItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ProductItem',
        key: 'id',
      },
    },
    variationOptionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VariationOption',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'ProductConfiguration',
  });

  return ProductConfiguration;
};
