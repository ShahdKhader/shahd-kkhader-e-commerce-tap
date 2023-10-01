import db from '../models';

export const getOrderSummary = async () => {
    try {
      const summary = {
        subtotal: 0, 
        discount: 0, 
        deliveryFee: 0, 
        tax: 0,
        grandTotal: 0, 
      };
      
      
      return summary;
    } catch (error) {
      console.error('Error fetching order summary:', error);
      throw new Error('Internal Server Error');
    }
  };