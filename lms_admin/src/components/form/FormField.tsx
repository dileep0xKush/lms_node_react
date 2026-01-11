type Props = {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
};

export function FormField({ label, error, required, children }: Props) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-gray-600">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {children}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
