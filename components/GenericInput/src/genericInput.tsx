import * as _ from "lodash";
import * as React from "react";
import "../../style/genericInput.css";
import { InfoTooltip } from "../../InfoTooltip/InfoTooltip";

interface IInfoTooltip {
  content: JSX.Element;
  placement?: "top" | "right" | "bottom" | "left";
}

interface GenericInputComponentProps {
  id: string;
  data?: string | number;
  type: "text" | "number" | "password" | "email" | "url";
  name: string;
  nameOverride?: string;
  required?: boolean;
  minLength?: null | number;
  maxLength?: null | number;
  disabled?: boolean;
  togglePassword?: boolean;
  eyeLeft?: string;
  eyeTop?: string;
  infoTooltip?: IInfoTooltip;
}

/**
 * This component generates a input element with the specified type.
 *
 * @returns Jsx of the generated form.
 */
export const GenericInputComponent: React.FC<GenericInputComponentProps> = ({
  id,
  data,
  type,
  name,
  nameOverride,
  required,
  minLength,
  maxLength,
  disabled,
  togglePassword,
  eyeLeft,
  eyeTop,
  infoTooltip,
}) => {
  const handleTogglePassword = (e: any) => {
    e.target.classList.toggle("fa-eye");
    e.target.classList.toggle("fa-eye-slash");
    const input = document.getElementById(id) as HTMLInputElement;
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <div className="input-group">
      <label htmlFor={id} className="utrecht-form-label">
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
      <input
        className="utrecht-textbox utrecht-textbox--html-input"
        name={name}
        id={id}
        defaultValue={data === null ? undefined : data}
        type={type}
        required={required}
        minLength={minLength === null ? undefined : minLength}
        maxLength={maxLength === null ? undefined : maxLength}
        disabled={disabled}
      />
      {togglePassword === true && (
        <i
          className="fas fa-eye-slash"
          id="togglePassword"
          style={{ cursor: "pointer", position: "relative", left: eyeLeft, top: eyeTop }}
          onClick={handleTogglePassword}
        ></i>
      )}
    </div>
  );
};

GenericInputComponent.defaultProps = {
  data: undefined,
  disabled: false,
  required: false,
  minLength: null,
  maxLength: null,
  togglePassword: false,
  eyeLeft: "92%",
  eyeTop: "-27px",
};
