import express, { Request, Response } from 'express';
import { getAllCategoriesController, carouselImagesController } from '../controllers/categoriesController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('shahd roots');
});

router.get('/getAllCategories', getAllCategoriesController);

router.get('/getCarouselImages', carouselImagesController);

export default router;
