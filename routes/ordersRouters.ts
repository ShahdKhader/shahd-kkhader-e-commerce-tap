import express from 'express';
import * as OrdersController from '../controllers/ordersController';

const ordersRouter = express.Router();

ordersRouter.get('/placeOrder/:userId', OrdersController.placeOrder);

export default ordersRouter;