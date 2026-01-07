import { Request, Response } from 'express';
import * as userService from './user.service';
import { asyncHandler } from '../../common/utils/async-handler';
import { BadRequestException } from '../../common/errors/http-errors';
import { logger } from '../../common/logger/app-logger';
import { getPagination } from '../../common/helpers/pagination.helper';

export const create = asyncHandler(async (req: Request, res: Response) => {
  try {
    logger.info('Create user request received', { body: req.body });

    const user = await userService.create(req.body);
    return res.success({ user }, 'User created successfully', 201);
  } catch (err) {
    logger.error('Create user failed', { error: err });
    return res.error('User creation failed', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

export const findAll = asyncHandler(async (req: Request, res: Response) => {
  try {
    const pagination = getPagination(req);
    const response = await userService.findAll(pagination);

    return res.success(response, 'Users fetched successfully', 200);
  } catch (err) {
    return res.error('Failed to fetch users', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

export const findOne = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) throw new BadRequestException('User id is required');

    const user = await userService.findOne(id);
    return res.success({ user }, 'User fetched successfully', 200);
  } catch (err) {
    return res.error('Failed to fetch user', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

export const update = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new BadRequestException('User id is required');

    const user = await userService.update(id, req.body);
    return res.success({ user }, 'User updated successfully', 200);
  } catch (err) {
    return res.error('Failed to update user', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

export const destory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new BadRequestException('User id is required');

    await userService.destory(id);
    return res.success(null, 'User deleted successfully', 200);
  } catch (err) {
    return res.error('Failed to delete user', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});

/* ---------- STATUS UPDATE ---------- */
export const updateStatus = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    if (!id) throw new BadRequestException('User id is required');

    const user = await userService.updateStatus(id, isActive);
    return res.success({ user }, 'User status updated', 200);
  } catch (err) {
    return res.error('Failed to update user status', 400, {
      reason: err instanceof Error ? err.message : 'Unexpected error',
    });
  }
});
