import { http } from "../lib/http";

export type ApiUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type GetUsersApiResult = {
  data: {
    users: ApiUser[];
  };
};

export function getUsersApi() {
  return http.get<GetUsersApiResult>("/users");
}
