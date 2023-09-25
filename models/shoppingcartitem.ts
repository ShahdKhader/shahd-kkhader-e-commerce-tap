'use strict';
import { Model, DataTypes } from 'sequelize';

interface ShoppingCardItemAttributes {
  id: number;
  cardId: number;
  productId: number;
  quantity: number;
}

module.exports = (sequelize: any) => {
  class ShoppingCardItem extends Model<ShoppingCardItemAttributes> implements ShoppingCardItemAttributes {
    id!: number;
    cardId!: number;
    productId!: number;
    quantity!: number;

    static associate(models: any) {
      ShoppingCardItem.belongsTo(models.ShoppingCard, {
        foreignKey: 'cardId',
        as: 'card',
      });

      ShoppingCardItem.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      });
    }
  }
  ShoppingCardItem.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ShoppingCard',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ShoppingCardItem',
  });
  return ShoppingCardItem;
};
