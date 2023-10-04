import db from '../models';

export const createAddress = async (addressData: any) => {
    try {
      const address = await db.Addresses.create(addressData);
      return address;
    } catch (error) {
      console.error('Error creating address:', error);
      throw new Error('Internal Server Error');
    }
  };