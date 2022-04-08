import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { getInfo } from '../controllers';
import { index } from '../controllers/Category';

const router = Router()

router.get(
  '/categories',
  [],
  asyncHandler(index)
);

router.get(
  '/',
  [],
  asyncHandler(getInfo),
);

export default router;
