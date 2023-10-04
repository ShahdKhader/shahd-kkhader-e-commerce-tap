import { Request, Response } from 'express';
import *as WishingServices from '../services/wishingServices';
import { sendResponse } from '../utils/util';

export const addProductToWishing = async (req: Request, res: Response) => {
  try {
    const { userId, productId } = req.body; 
    const wishlistItem = await WishingServices.addToWishlist(userId, productId);
    sendResponse(res, wishlistItem);
} catch (error: any) {
    console.error('Error in addProductToWishing:', error);
    res.status(500).json({ error: error.message });
  }
};
