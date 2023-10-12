import sequelize from './sequelize';

import Brands from './brands';
import Categories from './categories';
import Addresses from './addressess';
import Users from './users';

import Cart from './cart';
import CartProducts from './cartproducts';
import CartProductsVariationsOptions from './cartproductsvariationsoptions';

import Orders from './orders';
import Products from './products';

import Variation from './variations';
import VariationOption from './variationsoptions';
import Wishing from './wishing';


// brands
Brands.hasMany(Products, {
  foreignKey: 'brandId',
})

// categories
Categories.hasMany(Products, {
  foreignKey: 'categoryId',
});

// products
Products.belongsTo(Brands, {
  foreignKey: 'brandId',
});
Products.belongsTo(Categories, {
  foreignKey: 'categoryId',
});
Products.belongsToMany(Cart, {
  through: 'CartProducts',
  foreignKey: 'productId'
});
Products.hasMany(Wishing, {
  foreignKey: 'productId',
});
Products.hasMany(Variation, {
  foreignKey: 'productId',
});

// user:
Users.hasMany(Cart, {
  foreignKey: 'userId'
});
Users.hasMany(Wishing, {
  foreignKey: 'userId'
});
Users.hasMany(Addresses, {
  foreignKey: 'userId'
});


// address
Addresses.belongsTo(Orders, {
  foreignKey: 'orderId'
});
Addresses.belongsTo(Users, {
  foreignKey: 'userId'
});

// cart
Cart.belongsTo(Users, {
  foreignKey: 'userId'
});
Cart.belongsToMany(Products, {
  through: 'CartProducts',
  foreignKey: 'cartId',
});
Cart.hasMany(Orders, {
  foreignKey: 'cartId'
})

// order
Orders.belongsTo(Cart, {
  foreignKey: 'cartId'
});
Orders.hasMany(Addresses, {
  foreignKey: 'orderId'
});

// cart products
CartProducts.belongsTo(Products, {
  foreignKey: 'productId',
});
CartProducts.belongsTo(Cart, {
  foreignKey: 'cartId',
});
CartProducts.belongsToMany(VariationOption, {
  through: 'CPVO',
  foreignKey: 'cartProductId', 
  otherKey: 'variationOptionId',
});


VariationOption.belongsTo(Variation, {
  foreignKey: 'variationId',
});
VariationOption.belongsToMany(CartProducts, {
  through: 'CPVO',
  foreignKey: 'variationOptionId', 
  otherKey: 'cartProductId',
});

// Variation
Variation.belongsTo(Products, {
  foreignKey: 'productId',
});
Variation.hasMany(VariationOption,{
  foreignKey: 'variationId',
});

// wishing:
Wishing.belongsTo(Users, {
  foreignKey: 'userId',
});
Wishing.belongsTo(Products, {
  foreignKey: 'productId',
})

export default {
  Addresses,
  Brands,
  Cart,
  CartProducts,
  CartProductsVariationsOptions,
  Categories,
  Orders,
  Products,
  Users,
  Variation,
  VariationOption,
  Wishing,
  sequelize,
}
