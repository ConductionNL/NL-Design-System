import * as React from "react";

interface BottomNavigationProps {
  id: string;
  name: string;
  className?: string;
  multiple?: boolean;
}

/**
 * This components renders a horizontal menu.
 *
 * If multiple is true set the id's of the CollapseBody as the id.
 * @returns JSX of the generated CollapseButton.
 */
export default function CollapseButton(props: BottomNavigationProps) {
  return (
    <button
      className={`btn btn-${props.className !== null ? props.className : "primary"}`}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={props.multiple ? ".multi-collapse" : `#${props.id}`}
      aria-expanded="false"
      aria-controls={props.id}
    >
      {props.name}
    </button>
  );
}

CollapseButton.defaultProps = {
  multiple: false,
};
