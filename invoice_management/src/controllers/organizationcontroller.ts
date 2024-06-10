import { Request, Response } from 'express';
import { getAllOrganizations, createOrganization } from '../services/organizationservice';

export const getAllOrganizationsController = async (req: Request, res: Response) => {
  try {
    const organizations = await getAllOrganizations();
    res.json(organizations);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};

export const createOrganizationController = async (req: Request, res: Response) => {
  try {
    const organization = await createOrganization(req.body);
    res.status(201).json(organization);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unexpected error occurred');
    }
  }
};
