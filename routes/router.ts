import express, { Request, Response } from 'express';
import { getAllCategoriesController, carouselImagesController } from '../controllers/categoriesController';
import {newArrivalsController} from '../controllers/productsController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('shahd roots');
});

router.get('/getAllCategories', getAllCategoriesController);

router.get('/getCarouselImages', carouselImagesController);

router.get('/getNewArrivals', newArrivalsController);
export default router;
