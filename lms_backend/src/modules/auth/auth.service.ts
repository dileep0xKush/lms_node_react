import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { UserModel } from "../users/user.model";
import {
  RegisterDTO,
  LoginDTO,
  ForgotPasswordDTO,
  ResetPasswordDTO,
} from "./auth.interface";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const AuthService = {
  async register(dto: RegisterDTO) {
    const existing = await UserModel.findOne({ email: dto.email });
    if (existing) {
      throw new Error("Email already exists");
    }

    const hash = await bcrypt.hash(dto.password, 10);

    const user = await UserModel.create({
      name: dto.name,
      email: dto.email,
      password: hash,
    });

    return this.generateToken(user.id);
  },

  async login(dto: LoginDTO) {
    const user = await UserModel.findOne({ email: dto.email }).select(
      "+password"
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) {
      throw new Error("Invalid credentials");
    }

    return this.generateToken(user.id);
  },

  async forgotPassword(dto: ForgotPasswordDTO) {
    const user = await UserModel.findOne({ email: dto.email });

    if (!user) {
      throw new Error("User not found");
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetPasswordToken = token;
    user.resetPasswordExpires = new Date(Date.now() + 15 * 60 * 1000);

    await user.save();

    return token;
  },

  async resetPassword(dto: ResetPasswordDTO) {
    const user = await UserModel.findOne({
      resetPasswordToken: dto.token,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      throw new Error("Invalid or expired token");
    }

    user.password = await bcrypt.hash(dto.password, 10);

    user.resetPasswordToken = "";
    user.resetPasswordExpires = new Date(0);

    await user.save();

    return true;
  },

  generateToken(id: string) {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: "7d" });
  },
};
