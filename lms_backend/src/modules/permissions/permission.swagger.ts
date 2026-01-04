/**
 * @swagger
 * tags:
 *   name: Permissions
 *   description: Permission management APIs
 *
 * components:
 *   schemas:
 *     Permission:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *           example: user.create
 *         description:
 *           type: string
 *           example: Can create users
 *
 * /permissions:
 *   get:
 *     tags: [Permissions]
 *     summary: Get all permissions
 *   post:
 *     tags: [Permissions]
 *     summary: Create permission
 *
 * /permissions/{id}:
 *   get:
 *     tags: [Permissions]
 *     summary: Get permission by id
 *   put:
 *     tags: [Permissions]
 *     summary: Update permission
 *   delete:
 *     tags: [Permissions]
 *     summary: Delete permission
 */
