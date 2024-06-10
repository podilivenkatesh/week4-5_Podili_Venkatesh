import Invoice from '../models/invoice';

export const getAllInvoices = async () => {
  try {
    return await Invoice.findAll();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createInvoice = async (data: any) => {
  try {
    return await Invoice.create(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
