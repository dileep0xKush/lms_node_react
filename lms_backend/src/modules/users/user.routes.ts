import { Router } from 'express';
import { create, findOne, findAll, update, destory, updateStatus } from './users.controller';
import { validate } from '../../common/middlewares/validate';
import {
  createUserSchema,
  updateUserSchema,
  updateUserStatusSchema,
  userIdParamSchema,
} from './user.validation';

const router = Router();

router.post('/', validate(createUserSchema), create);
router.get('/', findAll);
router.get('/:id', validate(userIdParamSchema, 'params'), findOne);
router.put('/:id', validate(userIdParamSchema, 'params'), validate(updateUserSchema), update);
router.delete('/:id', validate(userIdParamSchema, 'params'), destory);
router.patch(
  '/:id/status',
  validate(userIdParamSchema, 'params'),
  validate(updateUserStatusSchema),
  updateStatus,
);

export default router;
