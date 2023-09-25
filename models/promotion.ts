'use strict';
import { Model, DataTypes } from 'sequelize';

interface PromotionAttributes {
  id: number;
  name: string;
  description: string;
  discountRate: number; 
  startDate: Date; 
  endDate: Date;   
}

module.exports = (sequelize: any) => {
  class Promotion extends Model<PromotionAttributes> implements PromotionAttributes {
    id!: number;
    name!: string;
    description!: string;
    discountRate!: number;
    startDate!: Date;
    endDate!: Date;

    static associate(models: any) {
      Promotion.belongsToMany(models.product_category, {
        through: 'promotion_category'
      });
    }
  }
  Promotion.init({
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
      allowNull: false
    },
    discountRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE, 
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Promotion',
  });
  return Promotion;
};
