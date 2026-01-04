interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const prev = () => page > 1 && onChange(page - 1);
  const next = () => page < totalPages && onChange(page + 1);

  return (
    <div className="flex items-center justify-between px-2 py-2">
      <span className="text-xs text-gray-500">
        Page {page} of {totalPages}
      </span>

      <div className="flex gap-2">
        <button
          onClick={prev}
          className="px-3 py-1 rounded-lg border disabled:opacity-40"
          disabled={page === 1}
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-3 py-1 rounded-lg border disabled:opacity-40"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
