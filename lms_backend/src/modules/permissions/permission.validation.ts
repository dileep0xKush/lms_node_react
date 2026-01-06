import * as yup from 'yup';

export const permissionIdParamSchema = yup
  .object({
    id: yup.string().trim().required(),
  })
  .required();

export const createPermissionSchema = yup
  .object({
    name: yup.string().trim().min(2).max(100).required(),
    description: yup.string().trim().max(255).optional(),
  })
  .required();

export const updatePermissionSchema = yup
  .object({
    name: yup.string().trim().min(2).max(100).optional(),
    description: yup.string().trim().max(255).optional(),
  })
  .required();
