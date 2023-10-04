import express from 'express';
import * as CartProductController from '../controllers/cartProductController';
const cartProductRoutes = express.Router();

cartProductRoutes.post('/addProductToCart', CartProductController.postProductToCart);

cartProductRoutes.get('/getMyCart/:userId', CartProductController.myCart);

export default cartProductRoutes;