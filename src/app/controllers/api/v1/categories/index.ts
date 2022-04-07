import { NextFunction, Request, Response } from "express";

export const index = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const categories = await req.app.get("db").query("SELECT version()");
  res.json({ categories });
};
