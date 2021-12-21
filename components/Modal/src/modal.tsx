import * as React from "react";

export enum VerticallyCentered {
  centered = "modal-dialog-centered",
  scrollable = "modal-dialog-centered modal-dialog-scrollable",
}

// default value is 500px
export enum Size {
  small = "modal-sm",
  lage = "modal-lg",
  extraLage = "modal-xl",
}

interface ModalProps {
  title: string;
  id: any;
  body: any;
  footer?: any;
  centered?: VerticallyCentered;
  size?: Size;
}

/**
 * This components renders bootstrap modal.
 *
 * @returns JSX of the generated Modal.
 */
export function Modal(props: ModalProps) {
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      id={`${props.id.replaceAll("-", "")}`}
      aria-labelledby={`${props.id.replaceAll("-", "")}Label`}
      aria-hidden="true"
    >
      <div className={`modal-dialog ${props.centered} ${props.size !== null && props.size}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">{props.body !== null && props.body()}</div>
          {props.footer !== null && (
            <div className="modal-footer" id={`modalFooter${props.id.replaceAll("-", "")}`}>
              {props.footer()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  footer: null,
  size: null,
  centered: null,
};
