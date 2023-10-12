import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface UsersAttributes {
  id: number;
  activeCartId: number;
}

class Users extends Model<UsersAttributes> implements UsersAttributes {
  id!: number;
  activeCartId!: number;
}
Users.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  activeCartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Users',
});

export default Users;