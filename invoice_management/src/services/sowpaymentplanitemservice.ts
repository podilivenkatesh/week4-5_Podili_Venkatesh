import SOWPaymentPlanItem from '../models/sowpaymentplanitem';

export const getAllSOWPaymentPlanItems = async () => {
  try {
    return await SOWPaymentPlanItem.findAll();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createSOWPaymentPlanItem = async (data: any) => {
  try {
    return await SOWPaymentPlanItem.create(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
