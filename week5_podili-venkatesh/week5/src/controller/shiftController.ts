import { Request, Response } from 'express';
import Shift from '../models/shift';
import Timesheet from '../models/timesheet';



// shift starts 
const startShift = async (req: Request, res: Response) => {
  const employeeId = (req as any).employeeId;
  try {
    const shift = await Shift.create({ employeeId, startTime: new Date(), endTime: null });
    res.json({ message: 'Shift started', shift });
  } catch (error) {
    console.log(error)
  }
};

// shift ends
const endShift = async (req: Request, res: Response) => {
  const employeeId = (req as any).employeeId;
  try {
    const shift = await Shift.findOne({ where: { employeeId, endTime: null } });
    if (!shift) {
      return res.json({ message: 'No active shift found' });
    }
    shift.endTime = new Date();
    shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / 3600000;
    await shift.save();
    res.json({ message: 'Shift ended', shift });
  } catch (error) {
    console.log(error)
  }
};

export { startShift, endShift };
