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

export const Checkbox = (props: CheckboxProps) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input utrecht-checkbox utrecht-checkbox--html-input"
          type={props.type}
          id={props.id}
          name={props.nameAttribute}
          defaultChecked={props.data !== null}
          defaultValue={props.defaultValue === "false" ? "false" : "true"}
          required={props.required !== false}
        />
        <label className="form-check-label" htmlFor={props.id}>
          {_.upperFirst(props.nameLabel)}
        </label>
      </div>
    </>
  );
};
