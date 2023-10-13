import express from 'express';
import * as CategoryController from '../controllers/categoryController';
const categorysRoutes = express.Router();

categorysRoutes.get('/getAllCategories', CategoryController.AllCategories);

categorysRoutes.get('/getCarouselImages', CategoryController.carouselImages);

export default categorysRoutes;