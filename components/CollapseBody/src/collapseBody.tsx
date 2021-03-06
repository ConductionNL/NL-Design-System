import * as React from "react";

interface CollapseBodyProps {
  items: Array<Record<"id" | "body", string>>;
  multiple?: boolean;
}

/**
 * This components renders a collapse body.
 *
 * @returns JSX of the generated CollapseBody.
 */
export function CollapseBody(props: CollapseBodyProps) {
  return (
    <div className="row">
      <>
        {props.items.map((item) => (
          <div className="col" key={item.id}>
            <div className={`collapse ${props.multiple && "multi-collapse"}`} id={item.id}>
              <div className="card card-body">{item.body}</div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}

CollapseBody.defaultProps = {
  multiple: false,
};
