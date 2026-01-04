import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthService } from "./auth.service";
import { asyncHandler } from "../../common/utils/async-handler";

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const COOKIE_NAME = "auth_token";

const cookieOptions = {
  httpOnly: true,
  sameSite: "strict" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const register = asyncHandler(async (req: Request, res: Response) => {
  try {
    const token = await AuthService.register(req.body);

    res.cookie(COOKIE_NAME, token, cookieOptions);

    return res.success({ token }, "User registered successfully", 201);
  } catch (err) {
    return res.error("Registration failed", 400, {
      reason: err instanceof Error ? err.message : "Registration error",
    });
  }
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  try {
    const token = await AuthService.login(req.body);

    res.cookie(COOKIE_NAME, token, cookieOptions);

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

// ---------- AUTH COOKIE USER -----------

export const me = asyncHandler(async (req: Request, res: Response) => {
  const token = req.cookies?.[COOKIE_NAME];

  if (!token) {
    return res.error("Not authenticated", 401, { reason: "No token" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    const user = await AuthService.getUserById(decoded.id);

    if (!user) {
      return res.error("User not found", 404, { reason: "Invalid user" });
    }

    return res.success({ user }, "Authenticated user", 200);
  } catch {
    return res.error("Invalid or expired token", 401, {
      reason: "Token verification failed",
    });
  }
});

export const logout = asyncHandler(async (_req: Request, res: Response) => {
  res.clearCookie(COOKIE_NAME, { path: "/" });
  return res.success(null, "Logged out", 200);
});
