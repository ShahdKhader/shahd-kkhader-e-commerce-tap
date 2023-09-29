import { Request, Response } from 'express';
import { getAllCategories } from '../services/categoriesServices';
import { sendResponse } from '../utils/util';
export const getAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    sendResponse(res, categories);
  } catch (error: any) {
    console.error('Error in controller:', error);
    res.status(500).json({ error: error.message });
  }
};
