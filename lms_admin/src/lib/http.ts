const API_BASE = import.meta.env.VITE_API_BASE;

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

type RequestOptions = { signal?: AbortSignal };

async function request<TResponse, TBody extends JsonValue | undefined = undefined>(
  method: string,
  url: string,
  body?: TBody,
  options?: RequestOptions,
): Promise<TResponse> {
  const res = await fetch(`${API_BASE}${url}`, {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'x-app-name': 'LMS-App',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: options?.signal,
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
  get: <TResponse>(url: string, options?: RequestOptions) =>
    request<TResponse>('GET', url, undefined, options),
  post: <TResponse, TBody extends JsonValue | undefined = undefined>(
    url: string,
    body?: TBody,
    options?: RequestOptions,
  ) => request<TResponse, TBody>('POST', url, body, options),

  put: <TResponse, TBody extends JsonValue>(url: string, body: TBody, options?: RequestOptions) =>
    request<TResponse, TBody>('PUT', url, body, options),
  patch: <TResponse, TBody extends JsonValue>(url: string, body: TBody, options?: RequestOptions) =>
    request<TResponse, TBody>('PATCH', url, body, options),
  delete: <TResponse>(url: string, options?: RequestOptions) =>
    request<TResponse>('DELETE', url, undefined, options),
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
