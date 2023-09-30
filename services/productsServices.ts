import db from '../models';
import { Op } from 'sequelize';

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