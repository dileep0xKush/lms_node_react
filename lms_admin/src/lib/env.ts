export const isProd = import.meta.env.PROD;
export const isDev = import.meta.env.DEV;

// Optional helpers
export const API_BASE = import.meta.env.VITE_API_BASE ?? "";
export const NODE_ENV = import.meta.env.MODE;
