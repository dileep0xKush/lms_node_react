import type { ReactNode } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

type SortOrder = 'asc' | 'desc';
type Header = string | { key: string; label: string; sortable?: boolean; width?: string };

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
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-sm table-fixed">
        {/* Lock column widths */}
        <colgroup>
          {headers.map((h) => {
            if (typeof h === 'string') return <col key={h} />;
            return <col key={h.key} style={{ width: h.width }} />;
          })}
        </colgroup>

        {/* Header */}
        <thead className="sticky top-0 z-10 bg-gray-50">
          <tr className="border-b border-gray-200">
            {headers.map((header) => {
              const isObject = typeof header !== 'string';
              const key = isObject ? header.key : header;
              const label = isObject ? header.label : header;
              const sortable = isObject ? !!header.sortable : false;

              const isActive = sortable && sortBy === key;

              return (
                <th key={key} className="px-5 py-3 text-left font-semibold text-gray-700">
                  {sortable ? (
                    <button
                      type="button"
                      onClick={() => {
                        const next = isActive && sortOrder === 'asc' ? 'desc' : 'asc';
                        onSortChange?.(key, next);
                      }}
                      className={`flex items-center gap-2 transition
                        ${isActive ? 'text-blue-600' : 'hover:text-gray-900'}
                      `}
                    >
                      <span className="truncate">{label}</span>
                      <span className="flex flex-col leading-none">
                        <FiChevronUp
                          className={`h-3 w-3 ${
                            isActive && sortOrder === 'asc' ? 'text-blue-600' : 'text-gray-300'
                          }`}
                        />
                        <FiChevronDown
                          className={`h-3 w-3 -mt-1 ${
                            isActive && sortOrder === 'desc' ? 'text-blue-600' : 'text-gray-300'
                          }`}
                        />
                      </span>
                    </button>
                  ) : (
                    <span className="truncate">{label}</span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>

        {/* Body */}
        <tbody className="divide-y divide-gray-100 bg-white">
          {isEmpty ? (
            <tr>
              <td colSpan={headers.length} className="px-5 py-12 text-center text-gray-500">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
}
