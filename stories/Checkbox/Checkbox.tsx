import * as _ from "lodash";
import * as React from "react";

interface CheckboxProps {
  type: string;
  id: string;
  nameLabel: string;
  nameAttribute: string;
  data?: null | boolean;
  required?: boolean;
  defaultValue?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  type,
  id,
  nameLabel,
  nameAttribute,
  data,
  required,
  defaultValue,
}) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input utrecht-checkbox utrecht-checkbox--html-input"
        type={type}
        id={id}
        name={nameAttribute}
        defaultChecked={data === true ? true : false}
        defaultValue={defaultValue === "false" ? "false" : "true"}
        required={required === true ? true : false}
      />
      <label className="form-check-label" htmlFor={id}>
        {_.upperFirst(nameLabel)}
      </label>
    </div>
  );
};
