import { Request, Response } from 'express';
import { getAllSOWPaymentPlans, createSOWPaymentPlan } from '../services/sowpaymentplanservice';

export const getAllSOWPaymentPlansController = async (req: Request, res: Response) => {
  try {
    const plans = await getAllSOWPaymentPlans();
    res.json(plans);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};

export const createSOWPaymentPlanController = async (req: Request, res: Response) => {
  try {
    const plan = await createSOWPaymentPlan(req.body);
    res.status(201).json(plan);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};
