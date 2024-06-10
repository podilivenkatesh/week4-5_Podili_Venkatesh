import Client from '../models/client';

export const getAllClients = async () => {
  try {
    return await Client.findAll();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createClient = async (data: any) => {
  try {
    return await Client.create(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
