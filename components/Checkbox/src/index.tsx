import * as _ from "lodash";
import * as React from "react";

export const Checkbox = ({
  type = "",
  id = "",
  data = null,
  nameLabel = "",
  nameAttribute = "",
  required = false,
  defaultValue = "false",
}) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input utrecht-checkbox utrecht-checkbox--html-input"
          type={type}
          id={id}
          name={nameAttribute}
          defaultChecked={data === null ? false : true}
          defaultValue={defaultValue === "false" ? "false" : "true"}
          required={required === false ? false : true}
        />

        <label className="form-check-label" htmlFor={id}>
          {_.upperFirst(nameLabel)}
        </label>
      </div>
    </>
  );
};
