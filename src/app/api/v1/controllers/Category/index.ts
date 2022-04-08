import { NextFunction, Request, Response } from 'express';

import { getAll } from '../../models/Category';

export const index = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const categories = await getAll();
  res.json({ categories });
};
