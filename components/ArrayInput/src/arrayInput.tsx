import * as React from "react";
import * as _ from "lodash";
import { deleteElementFunction, addElement } from "../../ElementCreation/src/elementCreation";

interface ArrayInputProps {
  data: Array<Record<"value", any>>;
  id?: string;
  label?: string;
}

/**
 * This components handles multidimensional array input forms.
 *
 * @returns JSX of the generated form.
 */
export const ArrayInputComponent: React.FC<ArrayInputProps> = ({ data, id, label }) => {
  const deleteElement = deleteElementFunction;
  return (
    <>
      <span className="utrecht-form-label">{_.upperFirst(label ?? id)}</span>
      <div id={`new${_.upperFirst(id)}`}>
        {data !== undefined &&
          data !== null &&
          data.map((item) => (
            <div key={item.value} className={`row ${item.value}`}>
              <div className="col-5">
                <div className="form-group">
                  <input
                    type="text"
                    id="value"
                    name={`${id}[${item.value}]`}
                    defaultValue={item.value}
                    className="utrecht-textbox utrecht-textbox--html-input mb-2"
                  />
                </div>
              </div>
              <div className="col-2 d-flex mt-auto mb-4">
                <button
                  value={item.value}
                  onClick={deleteElement}
                  type="button"
                  className="utrecht-button utrecht-button-sm btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <br />
      <div className="separator-solid" />
      <h5>Add {label ?? id}</h5>
      <div className="d-flex">
        <div className="col-4">
          <div className="form-group">
            <span className="utrecht-form-label">Value</span>
            <input type="text" id={`new${_.upperFirst(id)}Value`} className="form-control" />
          </div>
        </div>
        <div className="col-2 my-auto">
          <button
            type={"button"}
            className="utrecht-button utrecht-button-sm btn-sm btn-success mr-2"
            onClick={() => {
              addElement(
                `new${_.upperFirst(id)}`,
                `new${_.upperFirst(id)}Value`,
                `new${_.upperFirst(id)}Value`,
                id,
                deleteElement,
                false,
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

ArrayInputComponent.defaultProps = {
  id: "exampleArrayInput",
  label: "Example ArrayInput",
};
