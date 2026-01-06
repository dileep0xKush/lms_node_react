import { Schema, model } from 'mongoose';
import { Permission } from './permission.interface';

const PermissionSchema = new Schema<Permission>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const PermissionModel = model<Permission>('Permission', PermissionSchema);
