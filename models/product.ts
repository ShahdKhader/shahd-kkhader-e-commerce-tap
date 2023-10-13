'use strict';
import {
  Model,
  DataTypes,
} from 'sequelize';
import sequelize from './sequelize';

interface ProductAttributes {
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

class Product extends Model<ProductAttributes> implements ProductAttributes {
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
Product.init({
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
      model: 'Category',
      key : 'id'
    }
    
  },
  brandId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: 'Brand',
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
  modelName: 'Product',
  tableName: 'Product',

});

export default Product;
