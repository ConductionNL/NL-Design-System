import * as React from "react";

interface AlertProps {
  body: any;
  alertClass: string;
}

/**
 * This components renders bootstrap alert.
 *
 * @returns JSX of the generated Alert.
 */
export default function Alert(props: AlertProps) {
  return (
    <div className={`alert alert-${props.alertClass}`} role="alert">
      {props.body}
    </div>
  );
}
