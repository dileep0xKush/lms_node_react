import type { InputHTMLAttributes, ReactNode } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  rightIcon?: ReactNode;
  error?: string;
};

export default function Input({ rightIcon, error, className = '', ...props }: Props) {
  return (
    <div className="relative">
      <input
        {...props}
        className={`
          w-full rounded-lg border px-3 py-2.5 text-sm
          transition outline-none
          disabled:bg-gray-50 disabled:text-gray-500
          ${
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          }
          ${rightIcon ? 'pr-10' : ''}
          ${className}
        `}
      />

      {rightIcon && (
        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
          {rightIcon}
        </span>
      )}
    </div>
  );
}
