import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface UserAttributes {
  id: number;
  activeCartId: number;
}

class User extends Model<UserAttributes> implements UserAttributes {
  id!: number;
  activeCartId!: number;
}
User.init({
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
  modelName: 'User',
  tableName: 'User',

});

export default User;