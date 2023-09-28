'use strict';
import {
  Model
} from'sequelize';

interface CategoriesAttributes{
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Categories extends Model<CategoriesAttributes> implements CategoriesAttributes{
    id!: number;
    name!: string;
    description!: string;
    imageSrc!: string;
    imageAlt!: string;  
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      Categories.hasMany(models.Products, {
        foreignKey: 'categoryId',
      });
    }
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
  return Categories;
};