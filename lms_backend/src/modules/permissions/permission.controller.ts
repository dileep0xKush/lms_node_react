import { Request, Response } from "express";
import { asyncHandler } from "../../common/utils/async-handler";
import { PermissionService } from "./permission.service";

/* ---------- CREATE ---------- */
export const create = asyncHandler(async (req: Request, res: Response) => {
  try {
    const permission = await PermissionService.create(req.body);
    return res.success({ permission }, "Permission created successfully", 201);
  } catch (err) {
    return res.error("Permission creation failed", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

/* ---------- LIST ---------- */
export const findAll = asyncHandler(async (_req, res) => {
  try {
    const permissions = await PermissionService.findAll();
    return res.success(
      { permissions },
      "Permissions fetched successfully",
      200
    );
  } catch (err) {
    return res.error("Failed to fetch permissions", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

/* ---------- GET ONE ---------- */
export const findOne = asyncHandler(async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) return res.error("Permission id is required", 400);

    const permission = await PermissionService.findOne(id);
    if (!permission) return res.error("Permission not found", 404);

    return res.success({ permission }, "Permission fetched successfully", 200);
  } catch (err) {
    return res.error("Failed to fetch permission", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

/* ---------- UPDATE ---------- */
export const update = asyncHandler(async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) return res.error("Permission id is required", 400);

    const permission = await PermissionService.update(id, req.body);
    if (!permission) return res.error("Permission not found", 404);

    return res.success({ permission }, "Permission updated successfully", 200);
  } catch (err) {
    return res.error("Failed to update permission", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

/* ---------- DELETE ---------- */
export const remove = asyncHandler(async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) return res.error("Permission id is required", 400);

    const deleted = await PermissionService.remove(id);
    if (!deleted) return res.error("Permission not found", 404);

    return res.success(null, "Permission deleted successfully", 200);
  } catch (err) {
    return res.error("Failed to delete permission", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});
