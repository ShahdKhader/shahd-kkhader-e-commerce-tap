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