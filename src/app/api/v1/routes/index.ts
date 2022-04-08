import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { getInfo } from '../controllers';
import { index, getOneById, createCategory, updateCategory, deleteCategory } from '../controllers/Category';

const router = Router()

router.get(
  '/categories',
  [],
  asyncHandler(index)
);

router.get(
  '/categories/:id',
  [],
  asyncHandler(getOneById)
);

router.post(
  '/categories',
  [],
  asyncHandler(createCategory)
);

router.put(
  '/categories/:id',
  [],
  asyncHandler(updateCategory)
);

router.delete(
  '/categories/:id',
  [],
  asyncHandler(deleteCategory)
);

router.get(
  '/',
  [],
  asyncHandler(getInfo),
);

export default router;
