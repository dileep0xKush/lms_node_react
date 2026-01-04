import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`bg-white border rounded-2xl p-4 shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
