import sequelize from './sequelize';
import User from './user';
import Brand from './brand';
import Category from './category';
import Product from './product';
import Variation from './variation';
import VariationOption from './variationoption';
import Cart from './cart';
import CartProduct from './cartproduct';
import CartProductVariationOption from './cartproductvariationoption';
import Order from './order';
import Address from './address';
import Wishing from './wishing';

// user:
User.hasMany(Cart, {
  foreignKey: 'userId'
});
User.hasMany(Wishing, {
  foreignKey: 'userId'
});
User.hasMany(Address, {
  foreignKey: 'userId'
});

// brands
Brand.hasMany(Product, {
  foreignKey: 'brandId',
})

// Category
Category.hasMany(Product, {
  foreignKey: 'categoryId',
});

// product
Product.belongsTo(Brand, {
  foreignKey: 'brandId',
});
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
});
Product.belongsToMany(Cart, {
  through: 'CartProduct',
  foreignKey: 'productId'
});
Product.hasMany(Wishing, {
  foreignKey: 'productId',
});
Product.hasMany(Variation, {
  foreignKey: 'productId',
});
// address
Address.belongsTo(Order, {
  foreignKey: 'orderId'
});
Address.belongsTo(User, {
  foreignKey: 'userId'
});

// order
Order.belongsTo(Cart, {
  foreignKey: 'cartId'
});
Order.hasMany(Address, {
  foreignKey: 'orderId'
});

// cart
Cart.belongsTo(User, {
  foreignKey: 'userId'
});
Cart.belongsToMany(Product, {
  through: 'CartProduct',
  foreignKey: 'cartId',
});
Cart.hasMany(Order, {
  foreignKey: 'cartId'
})



// Variation
Variation.belongsTo(Product, {
  foreignKey: 'productId',
});
Variation.hasMany(VariationOption,{
  foreignKey: 'variationId',
});

//VariationOption
VariationOption.belongsTo(Variation, {
  foreignKey: 'variationId',
});
VariationOption.belongsToMany(CartProduct, {
  through: 'CPVO',
  foreignKey: 'variationOptionId', 
  otherKey: 'cartProductId',
});


// wishing:
Wishing.belongsTo(User, {
  foreignKey: 'userId',
});
Wishing.belongsTo(Product, {
  foreignKey: 'productId',
})




// cart product
CartProduct.belongsTo(Product, {
  foreignKey: 'productId',
});
CartProduct.belongsTo(Cart, {
  foreignKey: 'cartId',
});
CartProduct.belongsToMany(VariationOption, {
  through: 'CPVO',
  foreignKey: 'cartProductId', 
  otherKey: 'variationOptionId',
});





export default {
  Address,
  Brand,
  Cart,
  CartProduct,
  CartProductVariationOption,
  Category,
  Order,
  Product,
  User,
  Variation,
  VariationOption,
  Wishing,
  sequelize,
}