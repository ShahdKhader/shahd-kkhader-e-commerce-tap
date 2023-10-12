import db from '../models';

export const placeOrder = async (userId: number) => {
  try {
    const user = await db.Users.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const activeCartId = user.activeCartId;

    const cartItems = await db.CartProducts.findAll({
      where: {
        cartId: activeCartId,
      },
    });

    let orderTotal = 0;
    for (const cartItem of cartItems) {
      orderTotal += cartItem.price * cartItem.quantity;
    }
    const tax = 0; 
    const deliveryFee = 12;
    const newOrder = await db.Orders.create({
      status: 'Pending',
      price: orderTotal,
      discount: 0, 
      discountCoupon: 0, 
      creationDate: new Date(), 
      tax: tax, 
      delivaryFee: deliveryFee,
      total: orderTotal + tax + deliveryFee, 
      cartId: activeCartId, 
    });
    console.log('orderTotal:', orderTotal);
    console.log('cartItems:', cartItems);

    return newOrder;
  } catch (error) {
    console.error('Error in placing order:', error);
    throw new Error('Internal Server Error');
  }
};
