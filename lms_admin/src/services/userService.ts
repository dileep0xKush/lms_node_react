import { buildQuery, http } from '../lib/http';

export type ApiUser = {
  _id: string;
  name: string;
  email: string;
  role?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type GetUsersApiResult = {
  success: boolean;
  message: string;
  statusCode: number;
  data: {
    users: ApiUser[];
    pagination: {
      page: number;
      limit: number;
      total: number;
    };
  };
};

export function getUsersApi(
  options?: {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  isActive?: boolean;
  search?: string;
  },
  reqOptions?: { signal?: AbortSignal },
) {
  const query = buildQuery({
    page: options?.page ?? 1,
    limit: options?.limit ?? 5,
    sortBy: options?.sortBy ?? 'createdAt',
    sortOrder: options?.sortOrder ?? 'desc',
    isActive: options?.isActive,
    search: options?.search,
  });

  return http.get<GetUsersApiResult>(`/users${query}`, reqOptions);
}
