import type { ReactNode } from 'react';
import { FiX } from 'react-icons/fi';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
  submitLabel?: string;
  size?: ModalSize;
  hideFooter?: boolean;
}

export default function Modal({
  title,
  children,
  onClose,
  onSubmit,
  submitLabel = 'Save',
  size = 'md',
  hideFooter = false,
}: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
  }[size];

  return (
    <div
      className="!mt-0 fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`w-full ${sizeClasses} mx-4 rounded-2xl bg-white shadow-xl border border-gray-200
        animate-in fade-in zoom-in-95`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="h-9 w-9 flex items-center justify-center rounded-full
              text-gray-500 hover:text-gray-700 hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4 text-gray-700">{children}</div>

        {/* Footer */}
        {!hideFooter && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t bg-gray-50 rounded-b-2xl">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300
                text-gray-700 hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>

            {onSubmit && (
              <button
                onClick={onSubmit}
                className="px-5 py-2 text-sm font-medium rounded-lg
                  bg-blue-600 text-white hover:bg-blue-700
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                {submitLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
