import { Schema, model } from "mongoose";
import { Role } from "./role.interface";

const RoleSchema = new Schema<Role>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const RoleModel = model<Role>("Role", RoleSchema);
