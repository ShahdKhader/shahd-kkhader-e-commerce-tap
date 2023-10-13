import { Request, Response } from 'express';
import * as OrderService from '../services/ordersServices';
import { sendResponse } from '../utils/util';

export const placeOrder  = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params; 
    const order = await OrderService.placeOrder(Number(userId));
        sendResponse(res, order);
    } catch (error: any) {
      console.error('Error in placeOrder: ', error);
      res.status(500).json({ error: error.message });
    }
  };