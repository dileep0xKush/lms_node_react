import type { InputHTMLAttributes, ReactNode } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  rightIcon?: ReactNode;
};

export default function Input({ label, rightIcon, ...props }: Props) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm text-gray-600">{label}</label>}

      <div className="relative">
        <input
          {...props}
          className="w-full border rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}
