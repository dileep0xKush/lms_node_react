import {
  ApiSuccessResponse,
  ApiErrorResponse,
} from '../../common/interfaces/api-response.interface';

declare global {
  namespace Express {
    interface Response {
      success<T>(data: T, message?: string, statusCode?: number): Response<ApiSuccessResponse<T>>;

      error(message?: string, statusCode?: number, error?: unknown): Response<ApiErrorResponse>;
    }
  }
}

export {};
