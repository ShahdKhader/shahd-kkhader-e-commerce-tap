'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface ProductsAttributes {
  id: number;
  categoryId: number;
  brandId: number;
  name: string;
  description: string;
  price: number;
  comparePrice: number;
  rating: number | GLfloat;
  quantity: number;
  discount: number;
  imageUrl: string;
  imageSrc: string;
}

class Products extends Model<ProductsAttributes> implements ProductsAttributes {
  id!: number;
  categoryId!: number;
  brandId!: number;
  name!: string;
  description!: string;
  price!: number;
  comparePrice!: number;
  rating!: number | GLfloat;
  quantity!: number;
  discount!: number;
  imageUrl!: string;
  imageSrc!: string;
}
Products.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Categories',
      key : 'id'
    }
    
  },
  brandId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Brands',
      key : 'id'
    }
    
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  comparePrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false, 
  },
  imageUrl:{
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  imageSrc: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Products',
});

export default Products;
