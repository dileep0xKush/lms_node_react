import {
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
  type ReactNode,
  type ButtonHTMLAttributes,
  type ReactElement,
} from 'react';

type Align = 'left' | 'right';

type DropdownProps = {
  value: ReactNode;
  children: ReactNode;
  align?: Align;
  width?: number | string;
  disabled?: boolean;
  error?: boolean;
  searchable?: boolean;
  maxHeight?: number;
};

type ItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  danger?: boolean;
};

function DropdownItem({ active, danger, className = '', children, ...props }: ItemProps) {
  return (
    <button
      type="button"
      className={`
        w-full px-4 py-2 text-sm
        flex items-center justify-between
        transition
        ${danger ? 'text-red-600 hover:bg-red-50' : 'hover:bg-gray-100'}
        ${active ? 'font-medium text-blue-600 bg-blue-50' : 'text-gray-700'}
        ${className}
      `}
      {...props}
    >
      <span className="truncate">{children}</span>
      {active && <span className="text-blue-600 text-xs">✓</span>}
    </button>
  );
}

export default function Dropdown({
  value,
  children,
  align = 'right',
  width = '100%',
  disabled = false,
  error = false,
  searchable = false,
  maxHeight = 240,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredChildren = Children.toArray(children).filter((child) => {
    if (!searchable || !search) return true;

    if (!isValidElement(child)) return false;

    const element = child as ReactElement<{ children?: ReactNode }>;

    const childText =
      typeof element.props.children === 'string'
        ? element.props.children
        : Array.isArray(element.props.children)
        ? element.props.children.join('')
        : '';

    return childText.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`
          w-full rounded-lg border px-3 py-2.5 text-sm
          flex items-center justify-between
          bg-white transition
          ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'cursor-pointer hover:border-gray-400'}
          ${error ? 'border-red-300' : 'border-gray-300'}
          focus:outline-none focus:ring-2 focus:ring-blue-100
        `}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="truncate">{value}</span>
        <span className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {/* Menu */}
      {open && (
        <div
          role="menu"
          style={{ width }}
          className={`
            absolute z-30 mt-2 rounded-xl border border-gray-200
            bg-white shadow-lg
            ${align === 'right' ? 'right-0' : 'left-0'}
          `}
        >
          {/* Search */}
          {searchable && (
            <div className="p-2 border-b">
              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="
                  w-full rounded-md border px-3 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-100
                "
              />
            </div>
          )}

          {/* Scrollable list */}
          <div
            className="py-1 overflow-y-auto"
            style={{ maxHeight }}
            onClick={() => {
              setOpen(false);
              setSearch('');
            }}
          >
            {filteredChildren.length ? (
              filteredChildren
            ) : (
              <div className="px-4 py-2 text-sm text-gray-400">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* Static Item */
Dropdown.Item = DropdownItem;
