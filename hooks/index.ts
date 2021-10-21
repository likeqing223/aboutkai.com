import { useMemo, useState } from "react";

export function usePagination(page = 5) {
  const [index, setIndex] = useState(0);
  const start = useMemo(() => index * page, [page, index]);
  const end = useMemo(() => start + page, [start, page]);

  return [start, end, setIndex] as const;
}
