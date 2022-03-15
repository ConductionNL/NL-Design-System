import * as React from "react";

interface ModalProps {
  title: string;
  id: any;
  body: () => JSX.Element;
  footer?: () => JSX.Element;
}

/**
 * This components renders bootstrap modal.
 *
 * @returns JSX of the generated Modal.
 */
export const Modal: React.FC<ModalProps> = ({ title, id, body, footer}) => {
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      id={`${id.replaceAll("-", "")}`}
      aria-labelledby={`${id.replaceAll("-", "")}Label`}
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-lg`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">{body && body()}</div>
          {footer && (
            <div className="modal-footer" id={`modalFooter${id.replaceAll("-", "")}`}>
              {footer()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
