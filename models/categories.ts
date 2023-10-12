'use strict';
import {
  Model,
  DataTypes,
} from'sequelize';
import sequelize from './sequelize';

interface CategoriesAttributes{
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

class Categories extends Model<CategoriesAttributes> implements CategoriesAttributes{
  id!: number;
  name!: string;
  description!: string;
  imageSrc!: string;
  imageAlt!: string;  
}
Categories.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageSrc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageAlt: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Categories',
});

export default Categories;
