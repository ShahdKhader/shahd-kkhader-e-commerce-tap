import db from '../models';

export const getAllCategories = async () => {
  try {
    const categories = await db.Categories.findAll();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Internal Server Error');
  }
};
