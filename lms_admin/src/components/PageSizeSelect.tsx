import Dropdown from './Dropdown';

type PageSizeSelectProps = {
  value: number;
  onChange: (size: number) => void;
  options: number[];
};

export default function PageSizeSelect({ value, onChange, options }: PageSizeSelectProps) {
  return (
    <div className="flex items-center gap-3 text-sm">

      <Dropdown value={String(value)} align="left" width={90}>
        {options.map((size) => (
          <button
          key={size}
          type="button"
          onClick={() => onChange(size)}
          className="
          w-full px-3 py-2 text-left text-sm
          hover:bg-gray-100
          transition
          rounded-md
          "
          >
            {size}
          </button>
        ))}
      </Dropdown>
        <span className="text-gray-600 font-medium whitespace-nowrap">Rows per page</span>
    </div>
  );
}
