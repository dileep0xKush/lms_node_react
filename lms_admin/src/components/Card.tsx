import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`
        rounded-2xl
        bg-white
        border border-gray-200
        p-4
        shadow-sm
        transition-all duration-200
        hover:shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
}
