import type { InputHTMLAttributes, ReactNode } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  rightIcon?: ReactNode;
  error?: string;
};

export default function Input({ label, rightIcon, error, ...props }: Props) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm text-gray-600">{label}</label>}

      <div className="relative">
        <input
          {...props}
          className={`w-full border rounded-lg px-3 py-2 pr-10 outline-none
            ${
              error
                ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
            }`}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            {rightIcon}
          </span>
        )}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
