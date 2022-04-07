import { NextFunction, Request, Response } from "express";

export const getInfo = (req: Request, res: Response, _next: NextFunction) => {
  res.json({
    msg: "This is simple SKB Test Task with Categories",
  });
};

