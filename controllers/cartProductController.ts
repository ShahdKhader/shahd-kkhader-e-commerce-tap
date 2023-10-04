import { Request, Response } from 'express';
import * as CartProductServices from '../services/cartProductServices';
import { sendResponse } from '../utils/util';

export const postProductToCart = async (req: Request, res: Response) => {
    try {
      const { userId, productId, quantity } = req.body;
      const cartProduct = await CartProductServices.addProductToCart(userId, productId, quantity);
      sendResponse(res, cartProduct);
    } catch (error: any) {
      console.error('Error in addProductToCart:', error);
      res.status(500).json({ error: error.message });
    }
};

export const myCart = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const myCart = await CartProductServices.getMyCart(Number(userId));
    sendResponse(res, myCart);
  } catch (error: any) {
    console.error('Error in myCart:', error);
    res.status(500).json({ error: error.message });
  }
};