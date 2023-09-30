import db from '../models';

export const addToWishlist = async (userId: number, productId: number) => {
  try {
    const user = await db.Users.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const product = await db.Products.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    const wishlistItem = await db.Wishing.create({
      userId,
      productId,
    });

    return wishlistItem;
  } catch (error) {
    console.error('Error in addToWishlist service:', error);
    throw new Error('Internal Server Error');
  }
};
