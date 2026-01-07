import { RoleModel } from './role.model';
import { CreateRoleDto, UpdateRoleDto } from './role.dto';
import {
  PaginationOptions,
  applyPagination,
  PaginationResponse,
} from '../../common/helpers/pagination.helper';

export const RoleService = {
  async create(dto: CreateRoleDto) {
    return await RoleModel.create(dto);
  },

  async findAll(pagination: PaginationOptions) {
    const { data, total } = await applyPagination(RoleModel, pagination);

    if (pagination.isPaginated) {
      return {
        data,
        pagination: PaginationResponse(total, pagination),
      };
    }

    return { data };
  },

  async findOne(id: string) {
    return await RoleModel.findById(id);
  },

  async update(id: string, dto: UpdateRoleDto) {
    return await RoleModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
  },

  async remove(id: string) {
    const result = await RoleModel.findByIdAndDelete(id);
    return !!result;
  },
};
