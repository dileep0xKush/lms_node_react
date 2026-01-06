import type { ReactNode } from 'react';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
  submitLabel?: string;
  size?: ModalSize;
}

export default function Modal({
  title,
  children,
  onClose,
  onSubmit,
  submitLabel = 'Save',
  size = 'md',
}: ModalProps) {
  const sizeClasses = {
    sm: 'w-[360px]',
    md: 'w-[420px]',
    lg: 'w-[540px]',
    xl: 'w-[720px]',
  }[size];

  return (
    <div className="!mt-0 fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className={`bg-white ${sizeClasses} rounded-2xl shadow-2xl border border-gray-200`}>
        {/* Header */}
        <div className="px-5 py-4 border-b flex items-center justify-between">
          <h3 className="font-semibold text-lg">{title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-3">{children}</div>

        {/* Footer */}
        <div className="px-5 py-3 border-t flex justify-end gap-2 bg-gray-50 rounded-b-2xl">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
            Cancel
          </button>

          {onSubmit && (
            <button
              onClick={onSubmit}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              {submitLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
