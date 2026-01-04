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
  error?: E;
}
