export type ToastType = "success" | "error" | "info";

export type Toast = {
  id: string;
  message: string;
  type: ToastType;
};

export type ToastContextType = {
  showToast: (message: string, type?: ToastType) => void;
};
