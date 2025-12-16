export default function MandateDisclosureInfo({ section }) {
  const {
    rows = [],
    minWidth,
    isActionTable,
    type,
    year,
  } = section;

  /* ===================================================== */
  /* CLASS X / CLASS XII (Single Year Table) */
  /* ===================================================== */
  if (type === "singleYearTable") {
    return (
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-md shadow-sm">
        <table
          className="w-full table-fixed border-collapse text-sm"
          style={{ minWidth }}
        >
          <colgroup>
            <col style={{ width: "60px" }} />
            <col style={{ width: "50%" }} />
            <col style={{ width: "50%" }} />
          </colgroup>

          <tbody>
            <tr>
              <td className="border border-gray-200 text-center font-semibold py-3">
                1
              </td>
              <td
                className="border border-gray-200 px-4 py-3 text-center font-medium tracking-wide"
                colSpan={2}
              >
                {year}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  /* ===================================================== */
  /* ALL OTHER TABLES */
  /* ===================================================== */
  return (
    <div className="overflow-x-auto bg-white border border-gray-200 rounded-md shadow-sm">
      <table
        className="w-full table-fixed border-collapse text-sm"
        style={{ minWidth }}
      >
        <colgroup>
          <col style={{ width: "60px" }} />
          <col style={{ width: "50%" }} />
          <col style={{ width: "50%" }} />
        </colgroup>

        <tbody>
          {rows.map((row, i) => {
            /* ================= ACTION TABLE ================= */
            if (isActionTable) {
              return (
                <tr key={i}>
                  <td className="border border-gray-200 text-center font-semibold py-3 tracking-wide">
                    {i + 1}
                  </td>

                  <td className="border border-gray-200 px-4 py-3 tracking-wide">
                    {row.label}
                  </td>

                  <td className="border border-gray-200 px-4 py-3 text-center tracking-wide">
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Click here
                    </a>
                  </td>
                </tr>
              );
            }

            /* ================= NORMAL TABLE ================= */
            const [label, value, isSubRow] = row;

            return (
              <tr key={i}>
                <td className="border border-gray-200 text-center font-semibold py-3 tracking-wide">
                  {isSubRow ? "" : i + 1}
                </td>

                <td className="border border-gray-200 px-4 py-3 font-medium tracking-wide">
                  {label}
                </td>

                <td className="border border-gray-200 px-4 py-3 text-center tracking-wide">
                  {typeof value === "object" ? (
                    <a
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline break-all"
                    >
                      {value.label}
                    </a>
                  ) : (
                    value
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
