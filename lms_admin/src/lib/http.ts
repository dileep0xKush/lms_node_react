const API_BASE = import.meta.env.VITE_API_BASE;

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

async function request<TResponse, TBody extends JsonValue | undefined = undefined>(
  method: string,
  url: string,
  body?: TBody,
): Promise<TResponse> {
  const res = await fetch(`${API_BASE}${url}`, {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'x-app-name': 'LMS-App',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message =
      (data && typeof data === 'object' && 'message' in data
        ? (data as { message?: string }).message
        : undefined) || 'Request failed';

    throw new Error(message);
  }

  return data as TResponse;
}

export const http = {
  get: <TResponse>(url: string) => request<TResponse>('GET', url),
  post: <TResponse, TBody extends JsonValue | undefined = undefined>(url: string, body?: TBody) =>
    request<TResponse, TBody>('POST', url, body),

  put: <TResponse, TBody extends JsonValue>(url: string, body: TBody) =>
    request<TResponse, TBody>('PUT', url, body),
  patch: <TResponse, TBody extends JsonValue>(url: string, body: TBody) =>
    request<TResponse, TBody>('PATCH', url, body),
  delete: <TResponse>(url: string) => request<TResponse>('DELETE', url),
};

export function buildQuery(params: Record<string, unknown>) {
  const q = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      q.append(key, String(value));
    }
  });

  return `?${q.toString()}`;
}
