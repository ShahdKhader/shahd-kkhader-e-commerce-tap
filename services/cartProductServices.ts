import db from '../models';
import { Op } from 'sequelize';

export const addProductToCart = async (userId: number, productId: number, quantity: number) => {
  try {
    const user = await db.Users.findOne({
      where: { id: userId },
    });

    if (!user || !user.activeCartId) {
      throw new Error('User or active cart not found');
    }

    const cartId = user.activeCartId;

    const existingCartProduct = await db.CartProducts.findOne({
      where: { cartId, productId },
    });

    if (existingCartProduct) {
      existingCartProduct.quantity += quantity;
      await existingCartProduct.save();
      return existingCartProduct;
    }

    const product = await db.Products.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    const cartProduct = await db.CartProducts.create({
      productId,
      cartId,
      quantity,
      price: product.price,
    });

    return cartProduct;
  } catch (error) {
    console.error('Error in addProductToCart service:', error);
    throw new Error('Internal Server Error');
  }
};


  export const getMyCart = async (userId: number) => {
    try {
      const user = await db.Users.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
  
      const cartId = user.activeCartId;
  
      const cartProducts = await db.CartProducts.findAll({
        where: { cartId },
        include: [
          {
            model: db.Products,
            attributes: ['name', 'description', 'price', 'quantity'],
          },
        ],
      });
  
      const productDetails = cartProducts.map((cartProduct: any) => ({
        name: cartProduct.Product.name,
        description: cartProduct.Product.description,
        price: cartProduct.Product.price,
        quantity: cartProduct.quantity,
        subtotal: cartProduct.Product.price * cartProduct.quantity,

      }));
  
      return productDetails;
    } catch (error) {
      console.error('Error fetching products in cart:', error);
      throw new Error('Internal Server Error');
    }
  };
  
  
  