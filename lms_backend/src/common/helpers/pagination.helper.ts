import { Request } from 'express';
import * as yup from 'yup';
import { Model, Document } from 'mongoose';
import { Pagination } from '../interfaces/response.interface';

export type SortOrder = 'asc' | 'desc';

export interface PaginationOptions {
  page?: number;
  limit?: number;
  skip?: number;
  sort: Record<string, 1 | -1>;
  isPaginated: boolean;
  filter: Record<string, any>;
}

const paginationSchema = yup.object({
  page: yup.number().integer().min(1),
  limit: yup.number().integer().min(1).max(100),
  sortBy: yup.string().trim().default('createdAt'),
  sortOrder: yup.mixed<SortOrder>().oneOf(['asc', 'desc']).default('desc'),
  isActive: yup.boolean(),
  search: yup.string().trim(),
});

export function getPagination(req: Request): PaginationOptions {
  const PAGE = 1;
  const LIMIT = 5;
  const hasPage = req.query.page !== undefined;
  const hasLimit = req.query.limit !== undefined;

  const validated = paginationSchema.validateSync(req.query, {
    abortEarly: false,
    stripUnknown: true,
  });

  const { page = PAGE, limit = LIMIT, sortBy, sortOrder, isActive, search } = validated;

  const isPaginated = hasPage && hasLimit;

  const pagination: PaginationOptions = {
    sort: { [sortBy]: sortOrder === 'asc' ? 1 : -1 },
    isPaginated,
    filter: {},
  };

  if (isPaginated) {
    pagination.page = page;
    pagination.limit = limit;
    pagination.skip = (page - 1) * limit;
  }

  if (typeof isActive === 'boolean') {
    pagination.filter.isActive = isActive;
  }

  if (search) {
    pagination.filter.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } },
    ];
  }

  return pagination;
}

export async function applyPagination<T>(model: Model<T>, pagination: PaginationOptions) {
  const { isPaginated, sort, skip, limit, filter } = pagination;

  const query = model.find(filter).sort(sort);

  if (isPaginated && skip !== undefined && limit !== undefined) {
    query.skip(skip).limit(limit);
  }

  const [data, total] = await Promise.all([query.lean<T[]>(), model.countDocuments(filter)]);

  return { data, total };
}

export function PaginationResponse(
  total: number,
  pagination: PaginationOptions,
): Pagination | undefined {
  if (!pagination.isPaginated) return undefined;

  return {
    page: pagination.page!,
    limit: pagination.limit!,
    total,
  };
}
