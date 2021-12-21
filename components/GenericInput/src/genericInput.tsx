import * as _ from "lodash";
import * as React from "react";

interface GenericInputComponentProps {
  id: string;
  data?: string | number;
  type: "text" | "number" | "password" | "email";
  name: string;
  nameOverride?: string;
  required?: boolean;
  minLength?: null | number;
  maxLength?: null | number;
  disabled?: boolean;
  togglePassword?: boolean;
  eyeLeft?: string;
  eyeTop?: string;
}

/**
 * This component generates a input element with the specified type.
 *
 * @returns Jsx of the generated form.
 */
export const GenericInputComponent = (props: GenericInputComponentProps) => {
  const togglePassword = (e: any) => {
    e.target.classList.toggle("fa-eye");
    e.target.classList.toggle("fa-eye-slash");
    const input = document.getElementById(props.id) as HTMLInputElement;
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  return (
    <>
      <div className="input-group">
        <label htmlFor={props.id} className="utrecht-form-label">
          {_.upperFirst(props.nameOverride ?? props.name)}
          {props.required && " *"}
        </label>
        <input
          className="utrecht-textbox utrecht-textbox--html-input"
          name={props.name}
          id={props.id}
          defaultValue={props.data === null ? undefined : props.data}
          type={props.type}
          required={props.required}
          minLength={props.minLength === null ? undefined : props.minLength}
          maxLength={props.maxLength === null ? undefined : props.maxLength}
          disabled={props.disabled}
        />
        {props.togglePassword === true && (
          <i
            className="fas fa-eye-slash"
            id="togglePassword"
            style={{ cursor: "pointer", position: "relative", left: props.eyeLeft, top: props.eyeTop }}
            onClick={togglePassword}
          ></i>
        )}
      </div>
    </>
  );
};

GenericInputComponent.defaultProps = {
  data: null,
  disabled: false,
  required: false,
  minLength: null,
  maxLength: null,
  togglePassword: false,
  eyeLeft: "92%",
  eyeTop: "-27px",
};
