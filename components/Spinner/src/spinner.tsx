import * as React from "react";

interface SpinnerProps {
  paddingX?: string;
}

/**
 * This components renders a switch.
 *
 * @returns JSX of the generated Switch.
 */
export const Spinner: React.FC<SpinnerProps> = ({ paddingX }) => {
  return (
    <div className={"text-center " + paddingX}>
      <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  paddingX: "px-5",
};
