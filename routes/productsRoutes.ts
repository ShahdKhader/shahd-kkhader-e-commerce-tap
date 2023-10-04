import express from 'express';
import * as ProductsController from '../controllers/productsController';

const productsRoutes = express.Router();

productsRoutes.get('/getAllProducts',ProductsController.AllProducts);

productsRoutes.get('/getNewArrivals', ProductsController.newArrivals);

productsRoutes.get('/getHandPicked', ProductsController.handPicked);

productsRoutes.get('/getProductsByBrand/:brandName', ProductsController.shopByBrand);

productsRoutes.get('/getLimitedEditionProduct', ProductsController.limitedEditionProduct);

productsRoutes.get('/discountedProducts', ProductsController.DiscountedProducts);

productsRoutes.get('/getPopulerInCommunity', ProductsController.PopulerInCommunity);

productsRoutes.get('/getProductRatings/:productId', ProductsController.ProductRatings);

export default productsRoutes;