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
export function Alert(props: AlertProps) {
  return (
    <>
      <div
        style={{ position: "fixed", left: "50%", top: "90px", transform: "translateX(-50%)" }}
        id={props.id ? props.id + "Alert" : "Alert"}
        className={`alert alert-${props.alertClass} utrecht-alert utrecht-alert-${props.alertClass}`}
        role="alert"
      >
        {props.body()}
      </div>
    </>
  );
}
