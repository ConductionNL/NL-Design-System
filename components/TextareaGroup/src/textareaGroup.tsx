import * as _ from "lodash";
import * as React from "react";
import { InfoTooltip } from "../../InfoTooltip/InfoTooltip";

interface IInfoTooltip {
  content: JSX.Element;
  placement?: "top" | "right" | "bottom" | "left";
}

interface TextareaGroupProps {
  id: string;
  name: string;
  defaultValue?: string;
  label: string | JSX.Element;
  required?: boolean;
  disabled?: boolean;
  infoTooltip?: IInfoTooltip;
}

/**
 * This component generates a input element with the specified type.
 *
 * @returns Jsx of the generated form.
 */
export const TextareaGroup: React.FC<TextareaGroupProps> = ({
  id,
  infoTooltip,
  defaultValue,
  name,
  label,
  required,
  disabled,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="utrecht-form-label">
        {label}
        {required && " *"}
        {infoTooltip && <InfoTooltip content={infoTooltip.content} placement={infoTooltip.placement} />}
      </label>

      <textarea
        maxLength={500}
        className="utrecht-textarea form-control"
        {...{ id, defaultValue, name, required, disabled }}
      />
    </div>
  );
};
