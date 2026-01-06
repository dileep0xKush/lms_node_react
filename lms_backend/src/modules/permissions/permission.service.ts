import { PermissionModel } from './permission.model';
import { CreatePermissionDto, UpdatePermissionDto } from './permission.dto';

export const PermissionService = {
  async create(dto: CreatePermissionDto) {
    return await PermissionModel.create(dto);
  },

  async findAll() {
    return await PermissionModel.find();
  },

  async findOne(id: string) {
    return await PermissionModel.findById(id);
  },

  async update(id: string, dto: UpdatePermissionDto) {
    return await PermissionModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
  },

  async remove(id: string) {
    const result = await PermissionModel.findByIdAndDelete(id);
    return !!result;
  },
};
