import { UserModel } from "./user.model";
import { CreateUserDto } from "./user.dto";

export async function createUser(data: CreateUserDto) {
  const existing = await UserModel.findOne({ email: data.email });

  if (existing) {
    throw new Error("Email already exists");
  }

  const user = await UserModel.create(data);
  return user;
}
