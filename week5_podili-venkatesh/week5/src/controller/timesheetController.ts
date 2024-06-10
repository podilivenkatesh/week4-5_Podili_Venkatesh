import { Request, Response } from 'express';
import Timesheet from '../models/timesheet';


// creating time sheet by employee
const createTimesheet = async (req: Request, res: Response) => {
  const { projectName, taskName, fromDate, toDate, shiftId } = req.body;
  const employeeId = (req as any).employeeId;
  try {
    const timesheet = await Timesheet.create({
      projectName,
      taskName,
      fromDate,
      toDate,
      shiftId,
      employeeId,
    });
    res.json({ message: 'Timesheet created', timesheet });
  } catch (error) {
    console.log(error)
  }
};


// getting time sheets by employee
const getTimesheets = async (req: Request, res: Response) => {
    try {
      // Fetch all timesheets from the database
      const timesheets = await Timesheet.findAll();
  
      // Send the timesheets as a response
      res.json({ timesheets });
    } catch (error) {
      console.log(error);
      res.json({ message: 'Internal server error' });
    }
  };
  
  export { createTimesheet, getTimesheets };

