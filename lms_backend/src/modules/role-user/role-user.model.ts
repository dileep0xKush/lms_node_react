import { Schema, model } from "mongoose";

const RoleUserSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    roleId: { type: Schema.Types.ObjectId, ref: "Role", required: true },
  },
  { timestamps: true }
);

RoleUserSchema.index({ userId: 1, roleId: 1 }, { unique: true });

export const RoleUserModel = model("RoleUser", RoleUserSchema);
