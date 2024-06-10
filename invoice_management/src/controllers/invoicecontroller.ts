import { Request, Response } from 'express';
import { getAllInvoices, createInvoice } from '../services/invoiceservice';

export const getAllInvoicesController = async (req: Request, res: Response) => {
  try {
    const invoices = await getAllInvoices();
    res.json(invoices);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};

export const createInvoiceController = async (req: Request, res: Response) => {
  try {
    const invoice = await createInvoice(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};
