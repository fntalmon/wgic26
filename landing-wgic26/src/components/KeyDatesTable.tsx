export interface KeyDateRow {
  key: string;
  milestone: string;
  date: string;
  isoDate: string;
}

interface KeyDatesTableProps {
  title: string;
  headers: { milestone: string; date: string };
  rows: KeyDateRow[];
}

export function KeyDatesTable({ title, headers, rows }: KeyDatesTableProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl lg:text-3xl font-semibold text-white">
        {title}
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="min-w-full w-full border-collapse border border-white/20">
          <thead>
            <tr className="bg-white/10">
              <th className="border border-white/20 px-4 py-3 text-left text-white font-medium text-base w-2/3">
                {headers.milestone}
              </th>
              <th className="border border-white/20 px-4 py-3 text-center text-white font-medium text-base w-1/3">
                {headers.date}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isPast = new Date(row.isoDate) < new Date();
              return (
                <tr key={row.key} className="hover:bg-white/5">
                  <td
                    className={`border border-white/20 px-4 py-3 text-base text-left ${
                      isPast ? "text-white/40 line-through" : "text-white/80"
                    }`}
                  >
                    {row.milestone}
                  </td>
                  <td
                    className={`border border-white/20 px-4 py-3 text-base text-center ${
                      isPast ? "text-white/40 line-through" : "text-white/80"
                    }`}
                  >
                    {row.date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
