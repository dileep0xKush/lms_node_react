import { Router } from 'express';
import { create, remove, findAll, findOne } from './role-permission.controller';
import { validate } from '../../common/middlewares/validate';
import {
  assignRolePermissionSchema,
  roleIdParamSchema,
  permissionIdParamSchema,
} from './role-permission.validation';

const router = Router();

router.post('/', validate(assignRolePermissionSchema), create);
router.delete('/', validate(assignRolePermissionSchema), remove);
router.get('/role/:roleId', validate(roleIdParamSchema, 'params'), findAll);
router.get('/permission/:permissionId', validate(permissionIdParamSchema, 'params'), findOne);

export default router;
