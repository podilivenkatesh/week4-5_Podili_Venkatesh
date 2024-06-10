import { Request, Response } from 'express';
import { getAllClients, createClient } from '../services/clientservice';

export const getAllClientsController = async (req: Request, res: Response) => {
  try {
    const clients = await getAllClients();
    res.json(clients);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};

export const createClientController = async (req: Request, res: Response) => {
  try {
    const client = await createClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};
