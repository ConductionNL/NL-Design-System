import * as _ from "lodash";
import * as React from "react";

interface TextAreaProps {
  id: string;
  data?: string | number;
  name: string;
  nameOverride?: string;
  required?: boolean;
  cols?: null | number;
  rows?: null | number;
  disabled?: boolean;
}

/**
 * This component generates a input element with the specified type.
 *
 * @returns Jsx of the generated form.
 */
export const TextAreaComponent = (props: TextAreaProps) => {
  return (
    <>
      <div className="input-group">
        <label htmlFor={props.id} className="utrecht-form-label">
          {_.upperFirst(props.nameOverride ?? props.name)}
          {props.required && " *"}
        </label>
        <textarea
          className="utrecht-textbox utrecht-textbox--html-input"
          name={props.name}
          id={props.id}
          defaultValue={props.data === null ? undefined : props.data}
          required={props.required}
          cols={props.cols === null ? undefined : props.cols}
          rows={props.rows === null ? undefined : props.rows}
          disabled={props.disabled}
        />
      </div>
    </>
  );
};

TextAreaComponent.defaultProps = {
  data: null,
  disabled: false,
  required: false,
  rows: null,
  cols: null,
};
