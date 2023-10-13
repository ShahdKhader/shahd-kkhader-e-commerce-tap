import db from '../models';

export const getAllCategories = async () => {
  try {
    const categories = await db.Category.findAll();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Internal Server Error');
  }
};

export const getAllCarousel = async () => {
  try {
    const carousel = await db.Category.findAll({ attributes: ['name', 'imageSrc', 'imageAlt']});
    return carousel;
  } catch (error) {
    console.error('Error fetching carousel:', error);
    throw new Error('Internal Server Error');
  }
};
