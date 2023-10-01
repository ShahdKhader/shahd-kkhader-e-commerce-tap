import express, { Request, Response } from 'express';
import { getAllCategoriesController, carouselImagesController } from '../controllers/categoriesController';
import {getAllProductsController, newArrivalsController, handPickedController, shopByBrandController,
  limitedEditionProductController, DiscountedProductsController, PopulerInCommunityController, ProductDescriptionController
  , getProductRatingsController} from '../controllers/productsController';
import {addProductToCartController, myCartController} from '../controllers/cartProductController';
import {addProductToWishingController} from '../controllers/wishingControllers';
import {orderSummaryController} from '../controllers/ordersController';
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

router.post('/addProductToWishing', addProductToWishingController);

router.get('/getProductRatings', getProductRatingsController);

router.get('/getMyCart', myCartController); 

router.get('getOrderSummery', orderSummaryController);

export default router;
