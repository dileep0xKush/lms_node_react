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

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });

  } catch (err) {
    logger.error("Create user failed", {
      error: err instanceof Error ? err.message : err,
      body: req.body,
    });
    throw err; // let global handler respond
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

    return res.json({
      success: true,
      data: user,
    });

  } catch (err) {
    logger.error("Find user failed", {
      error: err instanceof Error ? err.message : err,
      params: req.params,
    });
    throw err;
  }
});
