import { Request, Response } from 'express';
import * as ProductServices from '../services/productsServices';
import { sendResponse } from '../utils/util';

export const AllProducts = async (req: Request, res: Response) => {
    try {
      const categories = await ProductServices.getAllProducts();
      sendResponse(res, categories);
    } catch (error: any) {
      console.error('Error in AllProducts :', error);
      res.status(500).json({ error: error.message });
    }
  };

export const newArrivals = async (req: Request, res: Response) => {
  try {
    const newArrivals = await ProductServices.getNewArrivals();
    sendResponse(res, newArrivals);
  } catch (error: any) {
    console.error('Error in newArrivals :', error);
    res.status(500).json({ error: error.message });
  }
};

export const handPicked = async (req: Request, res: Response) => {
try{
    const handPicked = await ProductServices.getHandPicked();
    sendResponse(res, handPicked);
  } catch (error: any) {
    console.error('Error in handPicked :', error);
    res.status(500).json({ error: error.message });
  } 
};

export const shopByBrand = async (req: Request, res: Response) => {
    try {
      const brandName = req.params.brandName;
      const shopByBrand = await ProductServices.getProductsByBrand(brandName); 
      sendResponse(res, shopByBrand);
    } catch (error: any) {
      console.error('Error in shopByBrand:', error);
      res.status(500).json({ error: error.message });
    }
};

export const limitedEditionProduct = async (req: Request, res: Response) => {
    try {
      const limitedEditionProduct = await ProductServices.getLimitedEditionProduct(); 
      sendResponse(res, limitedEditionProduct);
    } catch (error: any) {
      console.error('Error in limitedEditionProduct:', error);
      res.status(500).json({ error: error.message });
    }
};

export const DiscountedProducts = async (req: Request, res: Response) => {
    try {
      const discountedProducts = await ProductServices.getDiscountedProducts();
      sendResponse(res, discountedProducts);
    } catch (error: any) {
      console.error('Error in getDiscountedProducts:', error);
      res.status(500).json({ error: error.message });
    }
};

export const PopulerInCommunity = async (req: Request, res: Response) => {
    try {
      const populerInCommunity = await ProductServices.getPopulerInCommunity();
      sendResponse(res, populerInCommunity);
    } catch (error: any) {
      console.error('Error in getPopulerInCommunity:', error);
      res.status(500).json({ error: error.message });
    }
};


export const ProductRatings = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const ratings = await ProductServices.getProductRatings(Number(productId));
    sendResponse(res, ratings);
  } catch (error: any) {
    console.error('Error in ProductRatings:', error);
    res.status(500).json({ error: error.message });
  }
};