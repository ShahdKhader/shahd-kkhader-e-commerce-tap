'use strict';
import { Model, DataTypes } from 'sequelize';

interface PromotionCategoryAttributes {
  categoryId: number;
  promotionId: number;
}

module.exports = (sequelize: any) => {
  class PromotionCategory extends Model<PromotionCategoryAttributes> implements PromotionCategoryAttributes {
    categoryId!: number;
    promotionId!: number;

    static associate(models: any) {
      PromotionCategory.belongsTo(models.product_category, {
        foreignKey: 'categoryId',
        as: 'category',
      });

      PromotionCategory.belongsTo(models.promotion, {
        foreignKey: 'promotionId',
        as: 'promotion',
      });
    }
  }
  PromotionCategory.init({
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product_category',
        key: 'id'
      }
    },
    promotionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'promotion',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'PromotionCategory',
  });
  return PromotionCategory;
};
