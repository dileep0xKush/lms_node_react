type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, ...props }: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full px-3 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
