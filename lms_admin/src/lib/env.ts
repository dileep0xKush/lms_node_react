export const isProd =
  (import.meta.env.VITE_SHOW_ERROR_PAGE ?? "false") === "true";

export const API_BASE = import.meta.env.VITE_API_BASE ?? "";
export const NODE_ENV = import.meta.env.MODE;
