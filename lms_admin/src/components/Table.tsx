import type { ReactNode } from 'react';

type SortOrder = 'asc' | 'desc';
type Header = string | { key: string; label: string; sortable?: boolean };

interface TableProps {
  headers: Header[];
  children: ReactNode;
  sortBy?: string;
  sortOrder?: SortOrder;
  onSortChange?: (key: string, order: SortOrder) => void;
  isEmpty?: boolean;
  emptyMessage?: string;
}

export default function Table({
  headers,
  children,
  sortBy,
  sortOrder,
  onSortChange,
  isEmpty,
  emptyMessage = 'No data found',
}: TableProps) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-50/70">
          {headers.map((header) => {
            const isObject = typeof header !== 'string';
            const key = isObject ? header.key : header;
            const label = isObject ? header.label : header;
            const sortable = isObject ? !!header.sortable : false;

            const isActive = sortable && sortBy === key;
            const indicator = isActive ? (sortOrder === 'asc' ? '▲' : '▼') : '';

            return (
              <th key={key} className="text-left px-5 py-3 text-gray-600 font-medium select-none">
                {sortable ? (
                  <button
                    type="button"
                    onClick={() => {
                      const next = isActive && sortOrder === 'asc' ? 'desc' : 'asc';
                      onSortChange?.(key, next);
                    }}
                    className={`inline-flex items-center gap-1 hover:text-gray-900 transition`}
                  >
                    <span>{label}</span>
                    <span className="text-[10px] opacity-70">{indicator}</span>
                  </button>
                ) : (
                  <span>{label}</span>
                )}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {isEmpty ? (
          <tr>
            <td colSpan={headers.length} className="px-5 py-8 text-center text-gray-500">
              {emptyMessage}
            </td>
          </tr>
        ) : (
          children
        )}
      </tbody>
    </table>
  );
}
