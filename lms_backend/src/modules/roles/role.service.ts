import { RoleModel } from "./role.model";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";

export const RoleService = {
  async create(dto: CreateRoleDto) {
    return await RoleModel.create(dto);
  },

  async findAll() {
    return await RoleModel.find();
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
