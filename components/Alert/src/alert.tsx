import * as React from "react";

interface AlertProps {
  body: any;
  alertClass: string;
  id?: string;
}

/**
 * This components renders bootstrap alert.
 *
 * @returns JSX of the generated Alert.
 */
export const Alert: React.FC<AlertProps> = ({ id, alertClass, body }) => {
  return (
    <div
      style={{ position: "fixed", left: "50%", top: "90px", transform: "translateX(-50%)" }}
      id={id ? id + "Alert" : "Alert"}
      className={`alert alert-${alertClass} utrecht-alert utrecht-alert-${alertClass}`}
      role="alert"
    >
      {body()}
    </div>
  );
};
