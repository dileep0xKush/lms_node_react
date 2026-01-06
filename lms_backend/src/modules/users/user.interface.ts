import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string | null;
  email: string | null;
  password: string;
  role: 'user' | 'admin' | null;
  isActive: boolean | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
}
