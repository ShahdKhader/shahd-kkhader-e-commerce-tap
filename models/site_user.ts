'use strict';
import { Model, DataTypes } from 'sequelize';

interface SiteUserAttributes {
  id: number;
  email: string;
  phoneNumber: string;
  password: string;
  userName: string;
}

module.exports = (sequelize: any) => {
  class SiteUser extends Model<SiteUserAttributes> implements SiteUserAttributes {
    id!: number;
    email!: string;
    phoneNumber!: string;
    password!: string;
    userName!: string;

    static associate(models: any) {
      // define association here
      SiteUser.belongsToMany(models.Address, {
        through: 'user_address'
      });
    }
  }
  SiteUser.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'SiteUser',
  });
  return SiteUser;
};
