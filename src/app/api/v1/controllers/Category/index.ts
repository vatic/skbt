import { NextFunction, Request, Response } from 'express';

import { getAll, getOne, getOneSlug, create, update, destroy } from '../../models/Category';

export const index = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const categories = await getAll();
  res.json({ categories });
};

export const getOneById = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const id = req.params.id;
  const categories = await getOne(id);
  res.json({ category: categories[0] });
};

export const getOneBySlug = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const slug = req.params.slug;
  const categories = await getOneSlug(slug);
  res.json({ category: categories[0] });
};

export const createCategory = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const response = await create(req.body);
  res.json({ response });
};

export const updateCategory = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const id = req.params.id;
  const response = await update(id, req.body);
  res.json({ response });
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const id = req.params.id;
  const response = await destroy(id);
  res.json({ response });
};

