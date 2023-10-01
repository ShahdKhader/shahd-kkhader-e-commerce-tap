import { Request, Response } from 'express';
import {addProductToCart, getMyCart} from '../services/cartProductServices';
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

export const myCartController = async (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;
    const myCart = await getMyCart(userId);
    sendResponse(res, myCart);
  } catch (error: any) {
    console.error('Error in myCartController:', error);
    res.status(500).json({ error: error.message });
  }
};