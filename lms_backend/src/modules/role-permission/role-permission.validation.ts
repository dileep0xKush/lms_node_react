import * as yup from 'yup';

export const assignRolePermissionSchema = yup
  .object({
    roleId: yup.string().trim().required(),
    permissionId: yup.string().trim().required(),
  })
  .required();

export const roleIdParamSchema = yup
  .object({
    roleId: yup.string().trim().required(),
  })
  .required();

export const permissionIdParamSchema = yup
  .object({
    permissionId: yup.string().trim().required(),
  })
  .required();
