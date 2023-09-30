import { Request, Response } from 'express';
import { getNewArrivals} from '../services/productsServices';
import { sendResponse } from '../utils/util';

export const newArrivalsController = async (req: Request, res: Response) => {
  try {
    const newArrivals = await getNewArrivals();
    sendResponse(res, newArrivals);
  } catch (error: any) {
    console.error('Error in newArrivalsController :', error);
    res.status(500).json({ error: error.message });
  }
};