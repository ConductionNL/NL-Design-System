import * as _ from "lodash";
import * as React from "react";
import "../../style/selectInput.css";

interface SelectInputProps {
  options: Array<Partial<Record<"value" | "name" | "id" | "selected", any>>>;
  name: string;
  nameOverride?: string;
  value?: string;
  object?: boolean;
  id: string;
  data?: string;
  required?: boolean;
}

/**
 * This component generates a select input.
 * @returns Jsx of the generated form.
 */
export const SelectInputComponent = (props: SelectInputProps) => {
  return (
    <>
      <div className="input-group">
        <label className="utrecht-form-label" htmlFor={props.id}>
          {_.upperFirst(props.nameOverride ?? props.name)}
          {props.required && " *"}
        </label>
        <select
          name={props.name}
          id={props.id}
          required={props.required}
          className="utrecht-select utrecht-select--html-select"
        >
          {!props.required && <option key={""}> </option>}
          {props.options.map((option) => (
            <option
              key={option.value}
              selected={props.data !== null && props.value === null ? props.data === option.value : props.data !== null && props.value !== null ? props.data == `${option.name}` : false}
              value={props.value ? `${props.value}${option.id}` : option.value}
            >
              {_.upperFirst(option.name)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

SelectInputComponent.defaultProps = {
  required: false,
  object: false,
};
