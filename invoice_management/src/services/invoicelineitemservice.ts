import InvoiceLineItem from '../models/invoicelineitem';

export const getAllInvoiceLineItems = async () => {
  try {
    return await InvoiceLineItem.findAll();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createInvoiceLineItem = async (data: any) => {
  try {
    return await InvoiceLineItem.create(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
