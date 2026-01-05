import { http } from "../lib/http";

export function loginApi(email: string, password: string) {
  return http.post<
    { user: { id: number; name: string; email: string; role: string } },
    { email: string; password: string }
  >("/auth/login", { email, password });
}

export function logoutApi() {
  return http.post<null>("/auth/logout");
}

export function meApi() {
  return http.get<{ user: { id: string; name: string; email: string } }>(
    "/auth/me"
  );
}
