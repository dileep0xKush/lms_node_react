import { UserModel } from "./user.model";
import { CreateUserDto } from "./user.dto";
import { NotFoundException } from "../../common/errors/http-errors";
export async function create(data: CreateUserDto) {
  const existing = await UserModel.findOne({ email: data.email });

  if (existing) {
    throw new Error("Email already exists");
  }

  const user = await UserModel.create(data);
  return user;
}

export async function findOne(id: string) {
  const user = await UserModel.findById(id);

  if (!user) {
    throw new NotFoundException("User not found");
  }

  return user;
}
