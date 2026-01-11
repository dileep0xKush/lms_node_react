import { http } from '../lib/http';

export type Role = {
  _id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};

export type GetRolesApiResult = {
  success: boolean;
  message: string;
  statusCode: number;
  data: {
    role: Role[];
  };
};

export function getRolesApi() {
  return http.get<GetRolesApiResult>('/roles');
}
