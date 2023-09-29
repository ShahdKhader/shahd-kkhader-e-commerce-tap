import { Request, Response } from 'express';
import { getAllCategories } from '../services/categoriesServices';

export const getAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error: any) {
    console.error('Error in controller:', error);
    res.status(500).json({ error: error.message });
  }
};
