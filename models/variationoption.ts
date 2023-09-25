'use strict';
import { Model, DataTypes } from 'sequelize';

interface VariationOptionAttributes {
  id: number;
  variationId: number;
  value: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class VariationOption extends Model<VariationOptionAttributes> implements VariationOptionAttributes {
    id!: number;
    variationId!: number;
    value!: string;

    static associate(models: any) {
      // Define associations here
      VariationOption.belongsTo(models.Variation, {
        foreignKey: 'variationId',
        as: 'variation',
      });
      VariationOption.hasMany(models.ProductConfiguration, {
        foreignKey: 'variationOptionId',
        as: 'configurations',
      });
    }
  }

  VariationOption.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    variationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Variation',
        key: 'id',
      },
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'VariationOption',
  });

  return VariationOption;
};
