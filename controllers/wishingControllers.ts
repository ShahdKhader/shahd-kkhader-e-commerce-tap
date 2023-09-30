import { Request, Response } from 'express';
import {addToWishlist } from '../services/wishingServices';
import { sendResponse } from '../utils/util';

export const addProductToWishingController = async (req: Request, res: Response) => {
  try {
    const { userId, productId } = req.body; 
    const wishlistItem = await addToWishlist(userId, productId);
    sendResponse(res, wishlistItem);
} catch (error: any) {
    console.error('Error in addProductToWishingController:', error);
    res.status(500).json({ error: error.message });
  }
};
