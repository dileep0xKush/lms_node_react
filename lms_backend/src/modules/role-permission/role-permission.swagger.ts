/**
 * @swagger
 * tags:
 *   name: Role Permissions
 *   description: Role & Permission pivot mapping APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RolePermission:
 *       type: object
 *       properties:
 *         roleId:
 *           type: string
 *           example: 66b3c21d92f3112a9c112345
 *         permissionId:
 *           type: string
 *           example: 66b3c28a29ff12ac99123456
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     AssignRolePermissionDto:
 *       type: object
 *       required:
 *         - roleId
 *         - permissionId
 *       properties:
 *         roleId:
 *           type: string
 *           example: 66b3c21d92f3112a9c112345
 *         permissionId:
 *           type: string
 *           example: 66b3c28a29ff12ac99123456
 */

/**
 * @swagger
 * /role-permissions:
 *   post:
 *     summary: Assign permission to role
 *     tags: [Role Permissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssignRolePermissionDto'
 *     responses:
 *       201:
 *         description: Permission assigned to role
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     mapping:
 *                       $ref: '#/components/schemas/RolePermission'
 *       400:
 *         description: Assignment failed
 *
 *   delete:
 *     summary: Remove permission from role
 *     tags: [Role Permissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AssignRolePermissionDto'
 *     responses:
 *       200:
 *         description: Permission removed from role
 *       404:
 *         description: Mapping not found
 */

/**
 * @swagger
 * /role-permissions/role/{roleId}:
 *   get:
 *     summary: Get permissions assigned to a role
 *     tags: [Role Permissions]
 *     parameters:
 *       - in: path
 *         name: roleId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role permissions fetched
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     permissions:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/RolePermission'
 */

/**
 * @swagger
 * /role-permissions/permission/{permissionId}:
 *   get:
 *     summary: Get roles mapped to a permission
 *     tags: [Role Permissions]
 *     parameters:
 *       - in: path
 *         name: permissionId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Roles for permission fetched
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     roles:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/RolePermission'
 */
