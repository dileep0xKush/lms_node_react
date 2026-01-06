import { Schema, model } from 'mongoose';

const RolePermissionSchema = new Schema(
  {
    roleId: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
      required: true,
    },

    permissionId: {
      type: Schema.Types.ObjectId,
      ref: 'Permission',
      required: true,
    },
  },
  { timestamps: true },
);

// prevent duplicate role → permission mapping
RolePermissionSchema.index({ roleId: 1, permissionId: 1 }, { unique: true });

export const RolePermissionModel = model('RolePermission', RolePermissionSchema);
