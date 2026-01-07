export interface ApiResponseBase {
  success: boolean;
  statusCode: number;
  message?: string;
}

export interface ApiSuccessResponse<T> extends ApiResponseBase {
  success: true;
  data?: T;
}

export interface ApiErrorResponse<E> extends ApiResponseBase {
  success: false;
  error?: E;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}
