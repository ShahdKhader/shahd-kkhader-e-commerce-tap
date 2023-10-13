'use strict';
import {
  Model,
  DataTypes,
} from'sequelize';
import sequelize from './sequelize';

interface CategoryAttributes{
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

class Category extends Model<CategoryAttributes> implements CategoryAttributes{
  id!: number;
  name!: string;
  description!: string;
  imageSrc!: string;
  imageAlt!: string;  
}
Category.init({
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
  modelName: 'Category',
  tableName: 'Category',

});

export default Category;
