import { useState, type ReactNode, useCallback } from 'react';
import { FiCheckCircle, FiAlertTriangle, FiInfo, FiX } from 'react-icons/fi';
import { ToastContext } from './ToastContext';
import type { Toast, ToastType } from './types';

const TOAST_DURATION = 3500;

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = crypto.randomUUID();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, TOAST_DURATION);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const variantStyles: Record<ToastType, string> = {
    success: 'bg-green-50 text-green-700 border-green-200',
    error: 'bg-red-50 text-red-700 border-red-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
  };

  const variantIcons: Record<ToastType, ReactNode> = {
    success: <FiCheckCircle />,
    error: <FiAlertTriangle />,
    info: <FiInfo />,
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed top-5 right-5 z-[9999] space-y-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`
              flex items-start gap-3
              min-w-[280px] max-w-sm
              rounded-xl border
              px-4 py-3
              shadow-xl backdrop-blur
              animate-toast-in
              ${variantStyles[t.type]}
            `}
          >
            {/* Icon */}
            <div className="mt-0.5 text-lg">{variantIcons[t.type]}</div>

            {/* Message */}
            <div className="flex-1 text-sm font-medium leading-snug">{t.message}</div>

            {/* Close */}
            <button
              onClick={() => removeToast(t.id)}
              className="text-gray-400 hover:text-gray-600 transition"
              aria-label="Close notification"
            >
              <FiX />
            </button>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes toast-in {
          from {
            opacity: 0;
            transform: translateY(6px) translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(0);
          }
        }

        .animate-toast-in {
          animation: toast-in 0.25s ease-out;
        }
      `}</style>
    </ToastContext.Provider>
  );
}
