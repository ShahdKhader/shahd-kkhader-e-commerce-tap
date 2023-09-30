import express, { Request, Response } from 'express';
import { getAllCategoriesController, carouselImagesController } from '../controllers/categoriesController';
import {getAllProductsController, newArrivalsController, handPickedController} from '../controllers/productsController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('shahd roots');
});

router.get('/getAllCategories', getAllCategoriesController);

router.get('/getCarouselImages', carouselImagesController);

router.get('/getAllProducts', getAllProductsController);

router.get('/getNewArrivals', newArrivalsController);

router.get('/getHandPicked', handPickedController);
export default router;
