import * as React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Info } from "@mui/icons-material";

interface TooltipProps {
  content: JSX.Element;
  placement?: "top" | "right" | "bottom" | "left";
}

export const InfoTooltip: React.FC<TooltipProps> = ({ content, placement }) => {
  const _placement = placement ?? "top";

  return (
    <OverlayTrigger
      key={_placement}
      placement={_placement}
      overlay={<Tooltip id={`tooltip-${_placement}`}>{content}</Tooltip>}
    >
      <span style={{ color: "#1269DB" }}>
        <Info color="inherit" />
      </span>
    </OverlayTrigger>
  );
};
