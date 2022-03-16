import * as React from "react";
import { Table } from "../../Table/src/table";

interface waardepapierenTableProps {
  rows: Array<Record<any, any>>;
  fileFunction: any;
}

export const WaardepapierenTable = (props: waardepapierenTableProps) => {
  const columns = [
    {
      field: "type",
      headerName: "Type",
      valueFormatter: (value: { replaceAll: (arg0: string, arg1: string) => any }) => {
        const valueFormatted = value.replaceAll("_", " ");
        return `${valueFormatted}`;
      },
    },
    {
      field: "dateCreated",
      headerName: "Aangemaakt op",
      valueFormatter: (value: string | number | Date) => {
        const valueFormatted = new Date(value);
        return `${valueFormatted.toLocaleString("nl-nl", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}`;
      },
    },
    {
      field: "document",
      headerName: " ",
      renderCell: (item: { document: string; type: string; image: string }) => {
        return (
          <div className="float-right mr-4">
            <button
              className="utrecht-button mr-2"
              type="button"
              onClick={() => {
                props.fileFunction(item.document, item.type, ".pdf");
              }}
            >
              PDF
            </button>
            <button
              className="utrecht-button"
              type="button"
              onClick={() => {
                props.fileFunction(item.image, item.type, ".png");
              }}
            >
              QR
            </button>
          </div>
        );
      },
    },
  ];

  return <Table rows={props.rows} columns={columns} />;
};
