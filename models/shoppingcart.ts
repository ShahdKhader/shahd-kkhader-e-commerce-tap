'use strict';
import { Model, DataTypes } from 'sequelize';

interface ShoppingCardAttributes {
  id: number;
  userId: number;
  totalAmount: number;
}

module.exports = (sequelize: any) => {
  class ShoppingCard extends Model<ShoppingCardAttributes> implements ShoppingCardAttributes {
    id!: number;
    userId!: number;
    totalAmount!: number;

    static associate(models: any) {
      ShoppingCard.belongsTo(models.SiteUser, {
        foreignKey: 'userId',
        as: 'user',
      });

      ShoppingCard.hasMany(models.ShoppingCardItem, {
        foreignKey: 'cardId',
        as: 'cardItems',
      });
    }
  }
  ShoppingCard.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SiteUser',
        key: 'id'
      }
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ShoppingCard',
  });
  return ShoppingCard;
};
