import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { getInfo } from '../controllers';

const router = Router()

router.get(
  '/',
  [],
  asyncHandler(getInfo),
)

export default router
