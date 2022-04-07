import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { getInfo2 } from '../controllers/HomeController';

const router = Router()

router.get(
  '/',
  [],
  asyncHandler(getInfo2),
  // asyncHandler((req, res) => {
  //   res.json({
  //     msg: 'This is simple SKB Test Task with Categories'
  //   })
  // }),
)

export default router
