import { Request, Response } from 'express';
import { getAllCategories, getAllCarousel } from '../services/categoriesServices';
import { sendResponse } from '../utils/util';
export const getAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    sendResponse(res, categories);
  } catch (error: any) {
    console.error('Error in getAllCategoriesController :', error);
    res.status(500).json({ error: error.message });
  }
};

export const carouselImagesController = async (req: Request, res: Response) => {
  try {
    const carousel = await getAllCarousel();
    sendResponse(res, carousel);
  } catch (error: any) {
    console.error('Error in carouselImagesController: ', error);
    res.status(500).json({ error: error.message });
  }
};