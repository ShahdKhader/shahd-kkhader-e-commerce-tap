import express, { Request, Response } from 'express';
import { getAllCategoriesController, carouselImagesController } from '../controllers/categoriesController';
import {getAllProductsController, newArrivalsController, handPickedController, shopByBrandController,
  limitedEditionProductController, DiscountedProductsController, PopulerInCommunityController, ProductDescriptionController
  } from '../controllers/productsController';
import {addProductToCartController} from '../controllers/cartProductController';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('shahd roots');
});

router.get('/getAllCategories', getAllCategoriesController);

router.get('/getCarouselImages', carouselImagesController);

router.get('/getAllProducts', getAllProductsController);

router.get('/getNewArrivals', newArrivalsController);

router.get('/getHandPicked', handPickedController);

router.get('/getProductsByBrand', shopByBrandController);

router.get('/getLimitedEditionProduct',limitedEditionProductController);

router.get('/discountedProducts', DiscountedProductsController);

router.get('/getPopulerInCommunity', PopulerInCommunityController);

router.get('/getProductDiscription', ProductDescriptionController);

router.post('/addProductToCart', addProductToCartController);
export default router;
