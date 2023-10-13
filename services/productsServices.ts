import db from '../models';
import { Op, WhereAttributeHash } from 'sequelize';

export const getAllProducts = async () => {
    try {
      const categories = await db.Product.findAll();
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
    const newArrivals = await db.Product.findAll({
        where: {
            createdAt: {
              [Op.gte]: threeMonthsAgo,
            },
        } as WhereAttributeHash 
      });
    return newArrivals;
  } catch (error) {
    console.error('Error fetching newArrivals:', error);
    throw new Error('Internal Server Error');
  }
};

export const getHandPicked = async () => {
    try {
        const handPicked = await db.Product.findAll({
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
      const brand = await db.Brand.findOne({
        where: { name: brandName },
      });
  
      if (!brand) {
        return { success: false, message: 'Brand not found' };
      }
  
      const products = await db.Product.findAll({
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
        const lowQuantityProducts = await db.Product.findAll({
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
        const discountedProducts = await db.Product.findAll({
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
        const PopulerInCommunity = await db.Product.findAll({
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
      const product = await db.Product.findOne({
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

export const getProductRatings = async (productId: number) => {
  try {
    const product = await db.Product.findByPk(productId, {
      attributes: ['id', 'name', 'rating'],
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  } catch (error) {
    console.error('Error fetching product ratings:', error);
    throw new Error('Internal Server Error');
  }
};

