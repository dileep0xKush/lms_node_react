import { Request, Response } from "express";
import * as userService from "./user.service";

export async function userController(req: Request, res: Response) {
  try {
    const user = await userService.createUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to create user";

    return res.status(400).json({
      success: false,
      message,
    });
  }
}
