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
}

/**
 * This component generates a input element with the specified type.
 *
 * @param {string} type The type of the input.
 * @param {string|null} name Name used for input and label.
 * @param {string|null} nameOverride Overrides label text if set.
 * @param {string|null} id Id used for the input.
 * @param {string|null} data data used as defaultValue.
 * @param {boolean|false} required wether the input is required or not.
 * @param {string|null} minLength the minLength of the input.
 * @param {string|null} maxLength the maxLength of the input.
 * @returns Jsx of the generated form.
 */
export const GenericInputComponent = (props: GenericInputComponentProps) => {
  return (
    <>
      <div className="input-group">
        <label htmlFor={props.id} className="utrecht-form-label">
          {_.upperFirst(props.nameOverride ?? props.name)}
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
        />
      </div>
    </>
  );
};

GenericInputComponent.defaultProps = {
  data: null,
  required: false,
  minLength: null,
  maxLength: null,
};
