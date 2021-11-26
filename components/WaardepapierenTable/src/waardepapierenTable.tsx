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
    },
    {
      field: "dateCreated",
      headerName: "Aangemaakt op",
    },
    {
      field: "document",
      headerName: " ",
      renderCell: (item) => {
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
