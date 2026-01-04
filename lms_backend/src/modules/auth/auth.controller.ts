import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { asyncHandler } from "../../common/utils/async-handler";

export const register = asyncHandler(async (req: Request, res: Response) => {
  try {
    const token = await AuthService.register(req.body);

    return res.success({ token }, "User registered successfully", 201);
  } catch (err) {
    return res.error("Registration failed", 400, {
      reason: err instanceof Error ? err.message : "Unknown error",
    });
  }
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  try {
    const token = await AuthService.login(req.body);

    return res.success({ token }, "Login successful", 200);
  } catch (err) {
    return res.error("Invalid credentials", 401, {
      reason: err instanceof Error ? err.message : "Login failed",
    });
  }
});

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const token = await AuthService.forgotPassword(req.body);

      return res.success({ token }, "Reset token generated", 200);
    } catch (err) {
      return res.error("Password reset request failed", 404, {
        reason: err instanceof Error ? err.message : "User not found",
      });
    }
  }
);

export const resetPassword = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      await AuthService.resetPassword(req.body);

      return res.success(null, "Password updated successfully", 200);
    } catch (err) {
      return res.error("Password reset failed", 400, {
        reason: err instanceof Error ? err.message : "Invalid token",
      });
    }
  }
);
