import { Request, Response } from 'express';
import { asyncHandler } from '../../common/utils/async-handler';
import { RoleService } from './role.service';

/* ---------- CREATE ---------- */
export const create = asyncHandler(async (req: Request, res: Response) => {
  try {
    const role = await RoleService.create(req.body);
    return res.success({ role }, 'Role created successfully', 201);
  } catch (err) {
    return res.error('Role creation failed', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

/* ---------- LIST ALL ---------- */
export const findAll = asyncHandler(async (_req, res) => {
  try {
    const roles = await RoleService.findAll();
    return res.success({ roles }, 'Roles fetched successfully', 200);
  } catch (err) {
    return res.error('Failed to fetch roles', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

/* ---------- GET ONE ---------- */
export const findOne = asyncHandler(async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) return res.error('Role id is required', 400);

    const role = await RoleService.findOne(id);
    if (!role) return res.error('Role not found', 404);

    return res.success({ role }, 'Role fetched successfully', 200);
  } catch (err) {
    return res.error('Failed to fetch role', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

/* ---------- UPDATE ---------- */
export const update = asyncHandler(async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) return res.error('Role id is required', 400);

    const role = await RoleService.update(id, req.body);
    if (!role) return res.error('Role not found', 404);

    return res.success({ role }, 'Role updated successfully', 200);
  } catch (err) {
    return res.error('Failed to update role', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

/* ---------- DELETE ---------- */
export const remove = asyncHandler(async (req, res) => {
  try {
    const id = req.params?.id;
    if (!id) return res.error('Role id is required', 400);

    const deleted = await RoleService.remove(id);
    if (!deleted) return res.error('Role not found', 404);

    return res.success(null, 'Role deleted successfully', 200);
  } catch (err) {
    return res.error('Failed to delete role', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});
