import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface CartAttributes {
  id: number;
  status: number;
  userId: number;
}

class Cart extends Model<CartAttributes> implements CartAttributes {
  status!: number;
  userId!: number;
  id!: number;
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
      model: 'User',
      key : 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Cart',
  tableName: 'Cart',
});

export default Cart;
