import { NextFunction, Request, Response } from 'express';

import { getAll, create } from '../../models/Category';

export const index = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const categories = await getAll();
  res.json({ categories });
};

export const createCategory = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const response = await create(req.body);
  res.json({ response });
};
