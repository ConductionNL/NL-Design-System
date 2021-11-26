import * as React from "react";
import "./table.css";

interface tableProps {
  columns: Array<
    Partial<Record<"field" | "headerName" | "renderCell" | "hidden", any>>
  >;
  rows: Array<Record<any, any>>;
}

export default function Table(props: tableProps) {
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
            <tr>
              {props.columns.map((column) => (
                <>
                  {Object.keys(row).includes(column.field) && !column.hidden && (
                    <>
                      {column.renderCell ? (
                        <td className="align-middle">
                          {column.renderCell(row)}
                        </td>
                      ) : (
                        <td className="align-middle" key={index}>
                          {row[column.field]}
                        </td>
                      )}
                    </>
                  )}
                </>
              ))}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}
