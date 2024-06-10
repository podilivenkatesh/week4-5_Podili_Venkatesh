import SOWPaymentPlan from '../models/sowpaymentplan';

export const getAllSOWPaymentPlans = async () => {
  try {
    return await SOWPaymentPlan.findAll();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createSOWPaymentPlan = async (data: any) => {
  try {
    return await SOWPaymentPlan.create(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
