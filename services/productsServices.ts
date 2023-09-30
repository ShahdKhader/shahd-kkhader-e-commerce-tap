import db from '../models';
import { Op } from 'sequelize';

export const getAllProducts = async () => {
    try {
      const categories = await db.Products.findAll();
      return categories;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Internal Server Error');
    }
  };

export const getNewArrivals = async () => {
  try {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    const newArrivals = await db.Products.findAll({
        where: {
          createdAt: {
            [Op.gte]: threeMonthsAgo,
          },
        },
      });
    return newArrivals;
  } catch (error) {
    console.error('Error fetching newArrivals:', error);
    throw new Error('Internal Server Error');
  }
};

export const gethandPicked = async () => {
    try {
        const handPicked = await db.Products.findAll({
            where: {
                rating: { [Op.gt]: 4.5 },
                price: { [Op.lt]: 100 },
            },
        });
    return handPicked;
    } catch (error) {
    console.error('Error fetching handPicked:', error);
    throw new Error('Internal Server Error');
    }
};

export const getProductsByBrand = async (brandName: string) => {
    try {
      const brand = await db.Brands.findOne({
        where: { name: brandName },
      });
  
      if (!brand) {
        return { success: false, message: 'Brand not found' };
      }
  
      const products = await db.Products.findAll({
        where: {
          brandId: brand.id,
        },
      });
      return products;
    } catch (error) {
    console.error('Error fetching shopByBrand:', error);
    throw new Error('Internal Server Error');
    }
};

export const getLimitedEditionProduct = async () => {
    try {
        const lowQuantityProducts = await db.Products.findAll({
            where: { quantity: {[Op.lt]: 20} },
          });
    
      return lowQuantityProducts;
    } catch (error) {
    console.error('Error fetching shopByBrand:', error);
    throw new Error('Internal Server Error');
    }
};

export const getDiscountedProducts = async () => {
    try {
        const discountedProducts = await db.Products.findAll({
            where: {discount: { [Op.gte]: 15}},
          });
      return discountedProducts;
    } catch (error) {
    console.error('Error fetching DiscountedProducts:', error);
    throw new Error('Internal Server Error');
    }
};

export const getPopulerInCommunity = async () => {
    try {
        const PopulerInCommunity = await db.Products.findAll({
            where: { rating: {[Op.gt]: 4.5 }},
          });
      return PopulerInCommunity;
    } catch (error) {
    console.error('Error fetching PopulerInCommunity:', error);
    throw new Error('Internal Server Error');
    }
};

export const getProductDescription = async (productId: number) => {
    try {
      const product = await db.Products.findOne({
        where: { id: productId },
      });
  
      if (!product) {
        return { success: false, message: 'product not found' };
      }
  
      const description = product.description;
      return description;
    } catch (error) {
    console.error('Error fetching productDescription:', error);
    throw new Error('Internal Server Error');
    }
};

export const getProductRatings = async () => {
  try {
    const ratings = await db.Products.findAll({
      attributes: ['id', 'name', 'rating'], 
    });
    return ratings;
  } catch (error) {
    console.error('Error fetching product ratings:', error);
    throw new Error('Internal Server Error');
  }
};
