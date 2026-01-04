export interface CreatePermissionDto {
  name: string;
  description?: string;
}

export interface UpdatePermissionDto {
  name?: string;
  description?: string;
}
