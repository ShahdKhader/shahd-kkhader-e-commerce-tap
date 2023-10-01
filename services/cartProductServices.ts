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
  
      const product = await db.Products.findOne({
        where: { id: productId },
      });
  
      if (!product) {
        throw new Error('Product not found');
      }

      const cartProduct = await db.CartProducts.create({
        productId,
        cartId: user.activeCartId,
        quantity,
        price: product.price,
      });
  
      return cartProduct;
    } catch (error) {
      console.error('Error in addProductToCart service:', error);
      throw new Error('Internal Server Error');
    }
  };

  export const getMyCart = async () => {
    try {
        console.log('Fetching cart product details...');
        const cartProducts = await db.CartProducts.findAll({
          include: {
            model: db.Products, 
            required: true,
          },
        });
    
        const products = cartProducts.map((cartProduct: any) => cartProduct.Product);
    
        console.log('Cart product details retrieved:');
        return products;
    } catch (error) {
        console.error('Error fetching cart product details:', error);
        throw new Error('Internal Server Error');
      }
  };
  
  