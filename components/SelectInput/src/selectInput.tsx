import * as _ from "lodash";
import * as React from "react";
import "../../style/selectInput.css";

interface SelectInputProps {
  options: Array<Partial<Record<"value" | "name" | "id" | "selected", any>>>;
  name: string;
  nameOverride?: string;
  value?: string;
  id: string;
  required?: boolean;
}

/**
 * This component generates a select input.
 * @returns Jsx of the generated form.
 */
export const SelectInputComponent: React.FC<SelectInputProps> = ({
  options,
  name,
  nameOverride,
  value,
  id,
  required,
}) => {
  return (
    <div className="input-group">
      <label className="utrecht-form-label" htmlFor={id}>
        {_.upperFirst(nameOverride ?? name)}
        {required && " *"}
      </label>
      <select {...{ name, id, value, required }} className="utrecht-select utrecht-select--html-select">
        {!required && <option key={""}> </option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {_.upperFirst(option.name)}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectInputComponent.defaultProps = {
  required: false,
};
