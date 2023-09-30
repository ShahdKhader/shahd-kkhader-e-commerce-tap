import { Request, Response } from 'express';
import { getNewArrivals, getAllProducts, gethandPicked, getProductsByBrand, getLimitedEditionProduct, getDiscountedProducts,
    getPopulerInCommunity, getProductDescription, getProductRatings} from '../services/productsServices';
import { sendResponse } from '../utils/util';

export const getAllProductsController = async (req: Request, res: Response) => {
    try {
      const categories = await getAllProducts();
      sendResponse(res, categories);
    } catch (error: any) {
      console.error('Error in getAllProductsController :', error);
      res.status(500).json({ error: error.message });
    }
  };

export const newArrivalsController = async (req: Request, res: Response) => {
  try {
    const newArrivals = await getNewArrivals();
    sendResponse(res, newArrivals);
  } catch (error: any) {
    console.error('Error in newArrivalsController :', error);
    res.status(500).json({ error: error.message });
  }
};

export const handPickedController = async (req: Request, res: Response) => {
try{
    const handPicked = await gethandPicked();
    sendResponse(res, handPicked);
  } catch (error: any) {
    console.error('Error in handPickedController :', error);
    res.status(500).json({ error: error.message });
  } 
};

export const shopByBrandController = async (req: Request, res: Response) => {
    try {
      const brandName = req.body.brandName;
      const shopByBrand = await getProductsByBrand(brandName); 
      sendResponse(res, shopByBrand);
    } catch (error: any) {
      console.error('Error in shopByBrandController:', error);
      res.status(500).json({ error: error.message });
    }
};

export const limitedEditionProductController = async (req: Request, res: Response) => {
    try {
      const limitedEditionProduct = await getLimitedEditionProduct(); 
      sendResponse(res, limitedEditionProduct);
    } catch (error: any) {
      console.error('Error in limitedEditionProductController:', error);
      res.status(500).json({ error: error.message });
    }
};

export const DiscountedProductsController = async (req: Request, res: Response) => {
    try {
      const discountedProducts = await getDiscountedProducts();
      sendResponse(res, discountedProducts);
    } catch (error: any) {
      console.error('Error in getDiscountedProductsController:', error);
      res.status(500).json({ error: error.message });
    }
};

export const PopulerInCommunityController = async (req: Request, res: Response) => {
    try {
      const populerInCommunity = await getPopulerInCommunity();
      sendResponse(res, populerInCommunity);
    } catch (error: any) {
      console.error('Error in getPopulerInCommunityController:', error);
      res.status(500).json({ error: error.message });
    }
};

export const ProductDescriptionController = async (req: Request, res: Response) => {
    try {
      const productId =  req.body.productId;
      const ProductDescription = await getProductDescription(productId);
      sendResponse(res, ProductDescription);
    } catch (error: any) {
      console.error('Error in ProductDescriptionController:', error);
      res.status(500).json({ error: error.message });
    }
};

export const getProductRatingsController = async (req: Request, res: Response) => {
  try {
    const ratings = await getProductRatings();
    sendResponse(res, ratings);
  } catch (error: any) {
    console.error('Error in getProductRatingsController:', error);
    res.status(500).json({ error: error.message });
  }
};