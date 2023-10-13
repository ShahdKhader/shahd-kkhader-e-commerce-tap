import { Request, Response } from 'express';
import * as CategoryServices from '../services/categoriesServices';
import { sendResponse } from '../utils/util';
export const AllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryServices.getAllCategories();
    sendResponse(res, categories);
  } catch (error: any) {
    console.error('Error in getAllCategories :', error);
    res.status(500).json({ error: error.message });
  }
};

export const carouselImages = async (req: Request, res: Response) => {
  try {
    const carousel = await CategoryServices.getAllCarousel();
    sendResponse(res, carousel);
  } catch (error: any) {
    console.error('Error in carouselImages: ', error);
    res.status(500).json({ error: error.message });
  }
};