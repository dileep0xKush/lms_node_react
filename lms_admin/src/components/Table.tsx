import type { ReactNode } from 'react';

interface TableProps {
  headers: string[];
  children: ReactNode;
}

export default function Table({ headers, children }: TableProps) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr className="text-gray-500 border-b">
            {headers.map((h) => (
              <th key={h} className="text-left py-2 px-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
