import * as React from "react";
import "../../style/table.css";

interface tableProps {
  columns: Array<Partial<Record<"field" | "headerName" | "renderCell" | "hidden" | "valueFormatter", any>>>;
  rows: Array<Record<any, any>>;
}

export const Table = (props: tableProps) => {
  return (
    <table lang="nl" summary="Table." className="table">
      <thead>
        <tr>
          {props.columns.map((item, index) => (
            <>
              <th key={index}>{item.headerName ?? item.field}</th>
            </>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <>
            <tr key={index}>
              {props.columns.map((column) => (
                <>
                  {Object.keys(row).includes(column.field) && !column.hidden ? (
                    <>
                      {column.renderCell ? (
                        <td className="align-middle" key={index}>
                          {column.renderCell(row)}
                        </td>
                      ) : (
                        <td className="align-middle" key={index}>
                          {column.valueFormatter ? column.valueFormatter(row[column.field]) : row[column.field]}
                        </td>
                      )}
                    </>
                  ) : (
                    <td></td>
                  )}
                </>
              ))}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
