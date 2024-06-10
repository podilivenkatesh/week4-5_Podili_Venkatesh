// src/services/shiftService.ts
import Shift from '../models/shift';
import Timesheet from '../models/timesheet';

export const startShift = async (employeeId: string) => {
  const shift = await Shift.create({
    employeeId,
    startTime: new Date(),
  });
  return shift;
};

export const endShift = async (shiftId: string) => {
  const shift = await Shift.findByPk(shiftId);
  if (!shift) {
    throw new Error('Shift not found');
  }

  shift.endTime = new Date();
  shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / (1000 * 60 * 60);
  await shift.save();

  return shift;
};
