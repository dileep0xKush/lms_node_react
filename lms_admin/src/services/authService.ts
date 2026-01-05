import { http } from "../lib/http";
import type { MeResponse } from "../types/auth";

export function loginApi(email: string, password: string) {
  return http.post<{ token: string }, { email: string; password: string }>(
    "/auth/login",
    { email, password }
  );
}

export function logoutApi() {
  return http.post<null>("/auth/logout");
}

export function meApi() {
  return http.get<MeResponse>("/auth/me");
}
