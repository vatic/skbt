import { NextFunction, Request, Response } from 'express';
import { testCategory } from '../../models/Category';

import { app } from '../../../../';

export const index = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const result = await app.get('db').query('SELECT * from categories');
  // const categories = result; 
  const categories = result?.rows; 
  console.log(testCategory);
  res.json({ categories });
};
