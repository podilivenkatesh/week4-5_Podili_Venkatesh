import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


//authmiddleware for verification whether you are not
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.json({ message: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET!, (err : any , decoded : any) => {
    if (err) {
      return res.json({ message: 'Invalid token' });
    }
    (req as any).employeeId = (decoded as any).id;
    (req as any).employeeRole = (decoded as any).role;
    next();
  });
};

export default authMiddleware;
