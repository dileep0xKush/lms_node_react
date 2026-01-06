import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../errors/http-exception';

export function globalErrorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  let statusCode = 500;
  let message = 'Something went wrong';

  if (err instanceof HttpException) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  return res.status(statusCode).json({
    success: false,
    message,
  });
}
