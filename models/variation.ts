'use strict';
import { Model, DataTypes } from 'sequelize';

interface VariationAttributes {
  id: number;
  categoryId: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Variation extends Model<VariationAttributes> implements VariationAttributes {
    id!: number;
    categoryId!: number;
    name!: string;

    static associate(models: any) {
      // Define associations here
      Variation.belongsTo(models.ProductCategory, {
        foreignKey: 'categoryId',
        as: 'category',
      });
      Variation.hasMany(models.VariationOption, {
        foreignKey: 'variationId',
        as: 'options',
      });
    }
  }

  Variation.init({
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
  }, {
    sequelize,
    modelName: 'Variation',
  });

  return Variation;
};
