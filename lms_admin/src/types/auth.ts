export type ApiUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  resetPasswordExpires?: string;
  resetPasswordToken?: string;
};

export type MeResponse = {
  success: boolean;
  message: string;
  data: {
    user: ApiUser;
  };
  statusCode: number;
};
