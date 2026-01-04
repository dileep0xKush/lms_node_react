import { useState, type ReactNode, useCallback } from "react";
import { FiCheckCircle, FiAlertTriangle, FiInfo, FiX } from "react-icons/fi";
import { ToastContext } from "./ToastContext";
import type { Toast, ToastType } from "./types";

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed top-5 right-5 z-[9999] space-y-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`flex items-center gap-3 px-4 py-3 min-w-[260px]
              rounded-xl shadow-2xl border backdrop-blur-md
              animate-[slideIn_.25s_ease-out]
              ${
                t.type === "success"
                  ? "bg-green-600 text-white border-green-700"
                  : t.type === "error"
                  ? "bg-red-600 text-white border-red-700"
                  : "bg-blue-100 text-blue-800 border-blue-300"
              }`}
          >
            <div className="text-lg">
              {t.type === "success" && <FiCheckCircle />}
              {t.type === "error" && <FiAlertTriangle />}
              {t.type === "info" && <FiInfo />}
            </div>

            <div className="text-sm font-medium flex-1">{t.message}</div>

            <button
              onClick={() => removeToast(t.id)}
              className="opacity-80 hover:opacity-100"
            >
              <FiX />
            </button>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(14px) translateY(4px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
      `}</style>
    </ToastContext.Provider>
  );
}
