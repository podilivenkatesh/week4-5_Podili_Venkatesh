import { Request, Response } from 'express';
import Shift from '../models/shift';
import Employee from '../models/employee';


// it will give report for an employee 
const getReport = async (req: Request, res: Response) => {
  try {
    const shifts = await Shift.findAll({
      include: [Employee],
      attributes: ['startTime', 'endTime', 'actualHours'],
    });
    
    const report = shifts.map((shift: any) => ({
      employeeName: shift.Employee.name,
      assignedShiftHours: shift.Employee.assignedShiftHours,
      startTime: shift.startTime,
      endTime: shift.endTime,
      actualHours: shift.actualHours,
    }));
    
    res.json(report);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching report:', error.message);
      res.json({ error: error.message });
    } else {
      console.error('Unknown error:', error);
      res.json({ error: 'An unknown error occurred' });
    }
  }
};

export { getReport };
