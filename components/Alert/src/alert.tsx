import * as React from "react";

interface AlertProps {
  body: any;
  alertClass: string;
  id?: string;
  removeAfterMS?: number;
}

/**
 * This components renders bootstrap alert.
 *
 * @returns JSX of the generated Alert.
 */
export function Alert(props: AlertProps) {

  React.useEffect(() => {
    if (typeof window !== "undefined" && typeof window !== undefined) {
      setTimeout(
        function () {
          document.getElementById(props.id + "Alert")?.remove();
        },
        props.removeAfterMS ? props.removeAfterMS : 5000,
      )
    }
  }, []);

  return (
    <>
      <div id={props.id ? props.id + "Alert" : "Alert"} className={`alert alert-${props.alertClass}`} role="alert">
        {props.body()}
      </div>
    </>
  );
}
