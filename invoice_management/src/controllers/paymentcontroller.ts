import { Request, Response } from 'express';
import { getAllPayments, createPayment } from '../services/paymentservice';

export const getAllPaymentsController = async (req: Request, res: Response) => {
  try {
    const payments = await getAllPayments();
    res.json(payments);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};

export const createPaymentController = async (req: Request, res: Response) => {
  try {
    const payment = await createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};
