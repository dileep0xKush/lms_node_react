type PageSizeSelectProps = {
  value: number;
  onChange: (size: number) => void;
  options: number[];
};

export default function PageSizeSelect({ value, onChange, options }: PageSizeSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-sm
                 shadow-sm hover:bg-gray-50 transition
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((size) => (
        <option key={size} value={size}>
          {size} - page
        </option>
      ))}
    </select>
  );
}
