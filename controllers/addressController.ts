import { Request, Response } from 'express';
import * as AddressesServices from '../services/addressesServices';
import { sendResponse } from '../utils/util';

export const newAddress = async (req: Request, res: Response) => {
    try {
        const { userId, orderId, country, city, street } = req.body;
        const addressData = { country, city, street, userId, orderId }; 
        const address = await AddressesServices.createAddress(addressData);
        sendResponse(res, address);
    } catch (error) {
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };