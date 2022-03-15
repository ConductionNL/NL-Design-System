import * as _ from "lodash";
import * as React from "react";
import "../../style/selectInput.css";
import { InfoTooltip } from "../../InfoTooltip/InfoTooltip";

interface IInfoTooltip {
  content: JSX.Element;
  placement?: "top" | "right" | "bottom" | "left";
}

interface SelectInputProps {
  options: Array<Partial<Record<"value" | "name" | "id" | "selected", any>>>;
  name: string;
  nameOverride?: string;
  value?: string;
  data?: string;
  id: string;
  required?: boolean;
  onChange?: any;
  disabled?: boolean;
  infoTooltip?: IInfoTooltip;
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
  data,
  required,
  onChange,
  disabled,
  infoTooltip,
}) => {
  return (
    <div className="input-group">
      <label className="utrecht-form-label" htmlFor={id}>
        {_.upperFirst(nameOverride ?? name)}
        {required && " *"}
        {infoTooltip && (
          <InfoTooltip
            content={infoTooltip.content}
            placement={infoTooltip.placement}
            layoutClassName="genericInput-tooltip"
          />
        )}
      </label>
      <select
        {...{ name, id, required, disabled }}
        defaultValue={value ?? data}
        className="utrecht-select utrecht-select--html-select"
        onChange={onChange}
      >
        {!required && <option key={"empty"} />}
        {options.map((option, idx) => (
          <option key={idx} value={value ? `${value}${option.id}` : option.value}>
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
