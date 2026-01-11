import { buildQuery, http } from '../lib/http';
import type { GetUsersApiResult, CreateUserPayload, UpdateUserPayload } from '../types/user';

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

export function createUser(payload: CreateUserPayload) {
  return http.post('/users', payload);
}

export function updateUser(id: string, payload: UpdateUserPayload) {
  return http.put(`/users/${id}`, payload);
}

export function deleteUser(id: string) {
  return http.delete(`/users/${id}`);
}
