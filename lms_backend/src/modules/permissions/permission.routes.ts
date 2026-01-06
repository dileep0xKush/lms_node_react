import { Router } from 'express';
import { create, findAll, findOne, update, remove } from './permission.controller';
import { validate } from '../../common/middlewares/validate';
import {
  createPermissionSchema,
  updatePermissionSchema,
  permissionIdParamSchema,
} from './permission.validation';

const router = Router();

router.post('/', validate(createPermissionSchema), create);
router.get('/', findAll);
router.get('/:id', validate(permissionIdParamSchema, 'params'), findOne);
router.put(
  '/:id',
  validate(permissionIdParamSchema, 'params'),
  validate(updatePermissionSchema),
  update,
);
router.delete('/:id', validate(permissionIdParamSchema, 'params'), remove);

export default router;
