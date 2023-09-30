import { Request, Response } from 'express';
import {addProductToCart } from '../services/cartProductServices';
import { sendResponse } from '../utils/util';

export const addProductToCartController = async (req: Request, res: Response) => {
    try {
      const { userId, productId, quantity } = req.body;
      const cartProduct = await addProductToCart(userId, productId, quantity);
      sendResponse(res, cartProduct);
    } catch (error: any) {
      console.error('Error in addProductToCartController:', error);
      res.status(500).json({ error: error.message });
    }
};