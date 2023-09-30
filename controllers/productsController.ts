import { Request, Response } from 'express';
import { getNewArrivals, getAllProducts, gethandPicked} from '../services/productsServices';
import { sendResponse } from '../utils/util';

export const getAllProductsController = async (req: Request, res: Response) => {
    try {
      const categories = await getAllProducts();
      sendResponse(res, categories);
    } catch (error: any) {
      console.error('Error in getAllProductsController :', error);
      res.status(500).json({ error: error.message });
    }
  };

export const newArrivalsController = async (req: Request, res: Response) => {
  try {
    const newArrivals = await gethandPicked();
    sendResponse(res, newArrivals);
  } catch (error: any) {
    console.error('Error in newArrivalsController :', error);
    res.status(500).json({ error: error.message });
  }
};

export const handPickedController = async (req: Request, res: Response) => {
try{
    const handPicked = await gethandPicked();
    sendResponse(res, handPicked);
  } catch (error: any) {
    console.error('Error in handPickedController :', error);
    res.status(500).json({ error: error.message });
  } 
};