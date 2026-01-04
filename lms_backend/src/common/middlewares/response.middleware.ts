import { Response, Request, NextFunction } from "express";

export interface ApiResponseBase {
  success: boolean;
  message?: string;
  statusCode: number;
}

export interface ApiSuccessResponse<T> extends ApiResponseBase {
  success: true;
  data?: T;
}

export interface ApiErrorResponse<E> extends ApiResponseBase {
  success: false;
  error?: E | null;
}

export type ApiResponse<T, E> = ApiSuccessResponse<T> | ApiErrorResponse<E>;

export function responseHandler(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  res.success = function <T>(data: T, message = "Success", statusCode = 200) {
    const response: ApiSuccessResponse<T> = {
      success: true,
      message,
      data,
      statusCode,
    };

    return res.status(statusCode).json(response);
  };

  res.error = function <E>(
    message = "Something went wrong",
    statusCode = 500,
    error: E | null = null
  ) {
    const response: ApiErrorResponse<E> = {
      success: false,
      message,
      statusCode,
      error,
    };

    return res.status(statusCode).json(response);
  };

  next();
}
