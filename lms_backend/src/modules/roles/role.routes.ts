import { Router } from 'express';
import { create, findAll, findOne, update, remove } from './role.controller';
import { validate } from '../../common/middlewares/validate';
import { createRoleSchema, updateRoleSchema, roleIdParamSchema } from './role.validation';

const router = Router();

router.post('/', validate(createRoleSchema), create);
router.get('/', findAll);
router.get('/:id', validate(roleIdParamSchema, 'params'), findOne);
router.put('/:id', validate(roleIdParamSchema, 'params'), validate(updateRoleSchema), update);
router.delete('/:id', validate(roleIdParamSchema, 'params'), remove);

export default router;
