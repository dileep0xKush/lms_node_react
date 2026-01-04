import { Request, Response } from "express";
import * as userService from "./user.service";
import { asyncHandler } from "../../common/utils/async-handler";
import { BadRequestException } from "../../common/errors/http-errors";
import { logger } from "../../common/logger/app-logger";

export const create = asyncHandler(async (req: Request, res: Response) => {
  try {
    logger.info("Create user request received", { body: req.body });

    const user = await userService.create(req.body);

    if (!user) {
      throw new BadRequestException("Failed to create user");
    }

    logger.info("User created successfully", { userId: user.id });

    return res.success({ user }, "User created successfully", 201);
  } catch (err) {
    logger.error("Create user failed", {
      error: err instanceof Error ? err.message : err,
      body: req.body,
    });

    return res.error("User creation failed", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

export const findOne = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new BadRequestException("User id is required");
    }

    logger.info("Find user request", { userId: id });

    const user = await userService.findOne(id);

    logger.info("User fetched successfully", { userId: id });

    return res.success({ user }, "User fetched successfully", 200);
  } catch (err) {
    logger.error("Find user failed", {
      error: err instanceof Error ? err.message : err,
      params: req.params,
    });

    return res.error("Failed to fetch user", 400, {
      reason: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});
