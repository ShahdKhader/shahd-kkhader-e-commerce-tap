'use strict';
import {
  Model
} from 'sequelize';

interface CartAttributes {
  id: number;
  status: number;
  userId: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Cart extends Model<CartAttributes> implements CartAttributes {
    status!: number;
    userId!: number;
    id!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Cart.belongsTo(models.Users, {
        foreignKey: 'userId'
      });
      Cart.belongsToMany(models.Products, {
        through: 'CartProducts',
        foreignKey: 'cartId',
      });
      Cart.hasMany(models.Orders, {
        foreignKey: 'cartId'
      })
    }
  }
  Cart.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'Users',
        key : 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};