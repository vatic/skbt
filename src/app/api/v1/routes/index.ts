import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { getInfo } from '../controllers';
import { index, createCategory } from '../controllers/Category';

const router = Router()

router.get(
  '/categories',
  [],
  asyncHandler(index)
);

router.post(
  '/categories',
  [],
  asyncHandler(createCategory)
);

router.get(
  '/',
  [],
  asyncHandler(getInfo),
);

export default router;
