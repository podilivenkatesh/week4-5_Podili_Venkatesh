import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Employee from '../models/employee';
import dotenv from 'dotenv';

dotenv.config();
// for registration
const register = async (req: Request, res: Response) => {
  const { name, email, password, assignedShiftHours, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = await Employee.create({
      name,
      email,
      password: hashedPassword,
      assignedShiftHours,
      role,
    });
    res.json({ message: 'Employee registered successfully', employee });
  } catch (error) {
    console.log(error)
  }
};



// for login
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const employee = await Employee.findOne({ where: { email } });
    if (!employee) {
      return res.json({ message: 'Employee not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, employee.password);
    if (!isPasswordValid) {
      return res.json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: employee.id, role: employee.role }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.log(error)
  }
};

export { register, login };
