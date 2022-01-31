import * as React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

interface TooltipProps {
  content: JSX.Element;
  placement?: "top" | "right" | "bottom" | "left";
  layoutClassName?: string;
}

export const InfoTooltip: React.FC<TooltipProps> = ({ content, placement, layoutClassName }) => {
  const _placement = placement ?? "top";

  return (
    <OverlayTrigger
      key={_placement}
      placement={_placement}
      overlay={<Tooltip id={`tooltip-${_placement}`}>{content}</Tooltip>}
    >
      <span className={layoutClassName}>
        <FontAwesomeIcon icon={faInfo} />
      </span>
    </OverlayTrigger>
  );
};
