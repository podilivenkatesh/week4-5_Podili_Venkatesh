import { Request, Response } from 'express';
import { getAllSOWPaymentPlanItems, createSOWPaymentPlanItem } from '../services/sowpaymentplanitemservice';

export const getAllSOWPaymentPlanItemsController = async (req: Request, res: Response) => {
  try {
    const items = await getAllSOWPaymentPlanItems();
    res.json(items);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};

export const createSOWPaymentPlanItemController = async (req: Request, res: Response) => {
  try {
    const item = await createSOWPaymentPlanItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};
