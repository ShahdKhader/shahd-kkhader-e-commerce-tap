import express from 'express';
import * as AddressesController from '../controllers/addressesController';

const addressRouter = express.Router();

addressRouter.post('/addNewAddress', AddressesController.newAddress);

export default addressRouter;
