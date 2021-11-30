import * as React from "react";

interface ModalProps {
  title: string;
  id: any;
  body: any;
  footer?: any;
}

export default function Modal(props: ModalProps) {
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      id={`item-${props.id.replaceAll("-", "")}`}
      aria-labelledby={`item-${props.id.replaceAll("-", "")}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
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
};
