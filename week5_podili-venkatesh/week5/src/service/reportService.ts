// src/services/reportService.ts
import Employee from '../models/employee';
import Shift from '../models/shift';

export const generateReport = async () => {
  const employees = await Employee.findAll({
    include: [
      {
        model: Shift,
        as: 'shifts',
        required: true,
      },
    ],
  });

  const reportData = employees.map((employee) => ({
    name: employee.name,
    email: employee.email,
    assignedShiftHours: employee.assignedShiftHours,
    actualHours: (employee as any).getDataValue('shifts').reduce((sum: number, shift: any) => sum + shift.getDataValue('actualHours'), 0),
  }));

  return reportData;
};
