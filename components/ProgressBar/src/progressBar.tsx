import * as React from "react";

interface ProgressBarProps {
  height?: string;
  progress?: string;
  progressMin: string;
  progressMax?: string;
  label?: string;
  bgColor?: string;
}

/**
 * This components handles the progress bar.
 * @returns TSX of the progress bar.
 */
export default function ProgressBarComponent(props: ProgressBarProps) {
  return (
    <>
      <div className="progress" style={{ height: props.height }}>
        <div
          className={"progress-bar bg-" + props.bgColor}
          role="progressbar"
          style={{ width: props.progress + "%" }}
          ariaValuenow={props.progress}
          ariaValuemin={props.progressMin}
          ariaValuemax={props.progressMax}
        >
          {props.label}
        </div>
      </div>
    </>
  );
}

ProgressBarComponent.defaultProps = {
    height: "20px",
    progress: "20",
    progressMin: "0",
    progressMax: "100",
    label: "Progress bar",
    bgColor: "primary"
};
