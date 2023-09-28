'use strict';
import {
  Model
} from 'sequelize';

interface WishingAttributes{
  id: number;
  userId: number;
  productId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Wishing extends Model<WishingAttributes> implements WishingAttributes {
    id!: number;
    userId!: number;
    productId!: number; 
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Wishing.belongsTo(models.Users, {
        foreignKey: 'userId',
      });
      Wishing.belongsTo(models.Products, {
        foreignKey: 'productId',
      })
    }
  }
  Wishing.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Users',
        key : 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Products',
        key : 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Wishing',
  });
  return Wishing;
};