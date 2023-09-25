'use strict';
import { Model, DataTypes } from 'sequelize';

interface UserReviewAttributes {
  id: number;
  userId: number;
  productId: number;
  rating: number;
  reviewText: string;
  createdAt: Date;
}

module.exports = (sequelize: any) => {
  class UserReview extends Model<UserReviewAttributes> implements UserReviewAttributes {
    id!: number;
    userId!: number;
    productId!: number;
    rating!: number;
    reviewText!: string;
    createdAt!: Date;

    static associate(models: any) {
      UserReview.belongsTo(models.SiteUser, {
        foreignKey: 'userId',
        as: 'user',
      });

      UserReview.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      });
    }
  }
  UserReview.init({
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reviewText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserReview',
  });
  return UserReview;
};
