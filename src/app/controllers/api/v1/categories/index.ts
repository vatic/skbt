import { NextFunction, Request, Response } from "express";

import { app } from '../../../../';

export const index = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const result = await app.get('db').query('SELECT * from categories');
  // const categories = result; 
  const categories = result?.rows; 
  res.json({ categories });
};
