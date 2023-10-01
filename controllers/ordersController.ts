import { Request, Response } from 'express';
import {getOrderSummary} from '../services/ordersServices';
import { sendResponse } from '../utils/util';

export const orderSummaryController = async (req: Request, res: Response) => {
    try {
      const orderSummury = await getOrderSummary();
      sendResponse(res, orderSummury);
    } catch (error: any) {
      console.error('Error in orderSummeryController:', error);
      res.status(500).json({ error: error.message });
    }
};