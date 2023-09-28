'use strict';
import {
  Model
} from 'sequelize';

interface UsersAttributes {
  id: number;
  activeCartId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UsersAttributes> implements UsersAttributes {
    id!: number;
    activeCartId!: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      Users.hasMany(models.Cart, {
        foreignKey: 'userId'
      });
      // Users.hasMany(models.Wishing, {
      //   foreignKey: 'userId'
      // });
      // Users.hasMany(models.Addresses, {
      //   foreignKey: 'userId'
      // });
    }
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
  return Users;
};