import { UserModel } from "./user.model";
import { CreateUserDto } from "./user.dto";
import { NotFoundException } from "../../common/errors/http-errors";
import { RoleUserModel } from "../role-user/role-user.model";

export async function create(data: CreateUserDto) {
  const existing = await UserModel.findOne({ email: data.email });
  if (existing) throw new Error("Email already exists");

  const user = await UserModel.create(data);

  if (data.roleId) {
    await RoleUserModel.create({
      userId: user._id,
      roleId: data.roleId,
    });
  }

  return user;
}

export async function findAll() {
  return await UserModel.find();
}

export async function findOne(id: string) {
  const user = await UserModel.findById(id);
  if (!user) throw new NotFoundException("User not found");
  return user;
}

export async function update(id: string, data: Partial<CreateUserDto>) {
  const user = await UserModel.findByIdAndUpdate(id, data, { new: true });
  if (!user) throw new NotFoundException("User not found");
  return user;
}

export async function destory(id: string) {
  const user = await UserModel.findByIdAndDelete(id);
  if (!user) throw new NotFoundException("User not found");

  await RoleUserModel.deleteMany({ userId: id });

  return true;
}

export async function updateStatus(id: string, isActive: boolean) {
  const user = await UserModel.findByIdAndUpdate(
    id,
    { isActive },
    { new: true }
  );

  if (!user) throw new NotFoundException("User not found");

  return user;
}
