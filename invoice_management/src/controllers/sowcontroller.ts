import { Request, Response } from 'express';
import { getAllSOWs, createSOW } from '../services/sowservice';

export const getAllSOWsController = async (req: Request, res: Response) => {
  try {
    const sows = await getAllSOWs();
    res.json(sows);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};

export const createSOWController = async (req: Request, res: Response) => {
  try {
    const sow = await createSOW(req.body);
    res.status(201).json(sow);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};
