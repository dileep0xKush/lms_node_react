type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className = '', ...props }: Props) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-medium shadow-sm bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
