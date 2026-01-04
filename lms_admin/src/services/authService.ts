import { http } from "../lib/http";

export function loginApi(email: string, password: string) {
  return http.post<
    { user: { id: number; name: string; email: string; role: string } },
    { email: string; password: string }
  >("/auth/login", { email, password });
}
