import { RolePermissionModel } from "./role-permission.model";
import { AssignRolePermissionDto } from "./role-permission.dto";

export const RolePermissionService = {
  async create(dto: AssignRolePermissionDto) {
    return await RolePermissionModel.create(dto);
  },

  async remove(roleId: string, permissionId: string) {
    return await RolePermissionModel.findOneAndDelete({ roleId, permissionId });
  },

  async findAll(roleId: string) {
    return await RolePermissionModel.find({ roleId }).populate("permissionId");
  },

  async findOne(permissionId: string) {
    return await RolePermissionModel.find({ permissionId }).populate("roleId");
  },
};
