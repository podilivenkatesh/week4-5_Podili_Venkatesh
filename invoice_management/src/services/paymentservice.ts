import Payment from '../models/payment';

export const getAllPayments = async () => {
  try {
    return await Payment.findAll();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createPayment = async (data: any) => {
  try {
    return await Payment.create(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
