import express from 'express';
import * as WishingControllers from '../controllers/wishingControllers';
const wishingRoutes = express.Router();

wishingRoutes.post('/addProductToWishing', WishingControllers.addProductToWishing);

export default wishingRoutes;
