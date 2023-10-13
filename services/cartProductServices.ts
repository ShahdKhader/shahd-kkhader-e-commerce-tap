import db from '../models';

export const addProductToCart = async (userId: number, productId: number, quantity: number) => {
  try {
    const user = await db.User.findOne({
      where: { id: userId },
    });

    if (!user || !user.activeCartId) {
      throw new Error('User or active cart not found');
    }

    const cartId = user.activeCartId;

    const existingCartProduct = await db.CartProduct.findOne({
      where: { cartId, productId },
    });

    if (existingCartProduct) {
      existingCartProduct.quantity += quantity;
      await existingCartProduct.save();
      return existingCartProduct;
    }

    const product = await db.Product.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    const cartProduct = await db.CartProduct.create({
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
      const user = await db.User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }
  
      const cartId = user.activeCartId;
  
      const cartProducts = await db.CartProduct.findAll({
        where: { cartId },
        include: [
          {
            model: db.Product,
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
  
  
  