import { Request, Response } from 'express';
import { getAllInvoiceLineItems, createInvoiceLineItem } from '../services/invoicelineitemservice';

export const getAllInvoiceLineItemsController = async (req: Request, res: Response) => {
  try {
    const items = await getAllInvoiceLineItems();
    res.json(items);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};

export const createInvoiceLineItemController = async (req: Request, res: Response) => {
  try {
    const item = await createInvoiceLineItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};
