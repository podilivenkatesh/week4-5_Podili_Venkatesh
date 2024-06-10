// src/services/authService.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Employee from '../models/employee';
import Shift from '../models/shift';

const JWT_SECRET = process.env.JWT_SECRET!;

export const registerEmployee = async (name: string, email: string, password: string, assignedShiftHours: number, role: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const employee = await Employee.create({
    name,
    email,
    password: hashedPassword,
    assignedShiftHours,
    role,
  });
  return employee;
};

export const loginEmployee = async (email: string, password: string) => {
  const employee = await Employee.findOne({ where: { email } });
  if (!employee) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, employee.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: employee.id, email: employee.email, role: employee.role }, JWT_SECRET, { expiresIn: '1h' });
  
  const shift = await Shift.create({
    employeeId: employee.id,
    startTime: new Date(),
  });

  return { token, shiftId: shift.id };
};

export const logoutEmployee = async (shiftId: string) => {
  const shift = await Shift.findByPk(shiftId);
  if (!shift) {
    throw new Error('Shift not found');
  }

  shift.endTime = new Date();
  shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / (1000 * 60 * 60);
  await shift.save();

  return shift;
};
