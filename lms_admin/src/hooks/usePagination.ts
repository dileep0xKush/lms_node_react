// src/hooks/usePagination.ts
import { useCallback, useState } from 'react';

export function usePagination(initialPage = 1, initialPageSize = 5) {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [total, setTotal] = useState(0);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const setPageSafe = (p: number) => {
    setPage(Math.max(1, p));
  };

  const setPageSizeSafe = (size: number) => {
    setPage(1); // reset to first page
    setPageSize(size);
  };

  const setTotalSafe = useCallback(
    (count: number) => {
      setTotal(count);
      if ((page - 1) * pageSize >= count) setPage(1);
    },
    [page, pageSize],
  );

  return {
    page, 
    pageSize,
    total,
    totalPages,
    setPage: setPageSafe,
    setPageSize: setPageSizeSafe,
    setTotal: setTotalSafe,
  };
}
