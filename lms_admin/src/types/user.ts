/* ----------------------------------
 * Core User Types
 * ---------------------------------- */

export type UserStatus = 'Active' | 'Suspended';

export type UserForm = {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  role: string; // roleId
  status: UserStatus;
};

/* ----------------------------------
 * API User (Backend Response)
 * ---------------------------------- */

export type ApiUser = {
  _id: string;
  name: string;
  email: string;
  role?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

/* ----------------------------------
 * API Payloads
 * ---------------------------------- */

export type CreateUserPayload = {
  name: string;
  email: string;
  password?: string;
  roleId: string;
};

export type UpdateUserPayload = Partial<CreateUserPayload>;

/* ----------------------------------
 * API Responses
 * ---------------------------------- */

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

/* ----------------------------------
 * Shared Types
 * ---------------------------------- */

export type Role = {
  _id: string;
  name: string;
};
