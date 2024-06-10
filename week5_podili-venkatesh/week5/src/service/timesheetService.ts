// src/services/timesheetService.ts
import Timesheet from '../models/timesheet';

export const addTimesheet = async (employeeId: string, shiftId: string, projectName: string, taskName: string, fromDate: Date, toDate: Date) => {
  const timesheet = await Timesheet.create({
    employeeId,
    shiftId,
    projectName,
    taskName,
    fromDate,
    toDate,
  });
  return timesheet;
};
