import db from '../models';

export const placeOrder = async (userId: number) => {
  try {
    const cartItems = await db.CartProducts.findAll({
      where: {
        cartId: userId,
      },
    });

    let orderTotal = 0;
    for (const cartItem of cartItems) {
      orderTotal += cartItem.price * cartItem.quantity;
    }

    const newOrder = await db.Orders.create({
      status: 'Pending',
      price: orderTotal,
      discount: 0, 
      discountCoupon: 0, 
      creationDate: new Date(), 
      tax: 0, 
      delivaryFee: 12,
      total: orderTotal, 
      cartId: userId, 
    });

    await db.CartProducts.destroy({
      where: {
        cartId: userId,
      },
    });

      return newOrder;
    } catch (error) {
        console.error('Error in placing order:', error);
        throw new Error('Internal Server Error');
      }
    };