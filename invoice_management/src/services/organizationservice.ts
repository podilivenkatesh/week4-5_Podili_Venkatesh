import Organization from '../models/organization';

export const getAllOrganizations = async () => {
  try {
    return await Organization.findAll();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const createOrganization = async (data: any) => {
  try {
    return await Organization.create(data);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
