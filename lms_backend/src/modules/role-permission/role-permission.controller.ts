import { Request, Response } from "express";
import { asyncHandler } from "../../common/utils/async-handler";
import { RolePermissionService } from "./role-permission.service";

/* ---------- CREATE ---------- */
export const create = asyncHandler(async (req: Request, res: Response) => {
  try {
    const mapping = await RolePermissionService.create(req.body);
    return res.success({ mapping }, "Permission assigned to role", 201);
  } catch (err) {
    return res.error("Role permission assignment failed", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

/* ---------- DELETE ---------- */
export const remove = asyncHandler(async (req, res) => {
  try {
    const { roleId, permissionId } = req.body;

    if (!roleId || !permissionId) {
      return res.error("roleId and permissionId are required", 400);
    }

    const deleted = await RolePermissionService.remove(roleId, permissionId);
    if (!deleted) return res.error("Mapping not found", 404);

    return res.success(null, "Permission removed from role", 200);
  } catch (err) {
    return res.error("Failed to remove permission", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

/* ---------- LIST PERMISSIONS FOR ROLE ---------- */
export const findAll = asyncHandler(async (req, res) => {
  try {
    const roleId = req.params?.roleId;
    if (!roleId) return res.error("roleId is required", 400);

    const permissions = await RolePermissionService.findAll(roleId);
    return res.success({ permissions }, "Role permissions fetched", 200);
  } catch (err) {
    return res.error("Failed to fetch role permissions", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

/* ---------- LIST ROLES FOR PERMISSION ---------- */
export const findOne = asyncHandler(async (req, res) => {
  try {
    const permissionId = req.params?.permissionId;
    if (!permissionId) return res.error("permissionId is required", 400);

    const roles = await RolePermissionService.findOne(permissionId);
    return res.success({ roles }, "Roles for permission fetched", 200);
  } catch (err) {
    return res.error("Failed to fetch roles", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});
