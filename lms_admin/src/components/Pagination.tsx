import { useMemo } from 'react';

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const pages = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);

  const goTo = (p: number) => {
    if (p === page) return;
    if (p < 1 || p > totalPages) return;
    onChange(p);
  };

  const baseBtn = 'min-w-[36px] h-9 px-3 rounded-lg text-sm font-medium transition';

  return (
    <div className="flex items-center gap-1">
      {/* Prev */}
      <button
        onClick={() => goTo(page - 1)}
        disabled={page === 1}
        className={`
          ${baseBtn}
          bg-gray-100 text-gray-700
          hover:bg-gray-200
          disabled:opacity-40 disabled:cursor-not-allowed
        `}
      >
        Prev
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => goTo(p)}
            aria-current={p === page ? 'page' : undefined}
            className={`
              ${baseBtn}
              border
              ${
                p === page
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              }
            `}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => goTo(page + 1)}
        disabled={page === totalPages}
        className={`
          ${baseBtn}
          bg-gray-100 text-gray-700
          hover:bg-gray-200
          disabled:opacity-40 disabled:cursor-not-allowed
        `}
      >
        Next
      </button>
    </div>
  );
}
