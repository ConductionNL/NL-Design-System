import * as React from "react";

interface ProgressBarProps {
  height?: string;
  progress: string;
  progressMin?: string;
  progressMax?: string;
  label?: string;
  bgColor?: string;
}

/**
 * This components handles the progress bar.
 * @returns TSX of the progress bar.
 */
export function ProgressBarComponent(props: ProgressBarProps) {
  // Element build in JS because typescript wont regonize ariaValuenow
  const progressDiv = document.createElement("div");
  progressDiv.classList.add("progress-bar", "bg-" + props.bgColor);
  progressDiv.style.width = props.progress + "%";
  progressDiv.setAttribute("ariaValuenow", String(props.progress));
  progressDiv.setAttribute("ariaValuemin", String(props.progressMin));
  progressDiv.setAttribute("ariaValuemax", String(props.progressMax));
  progressDiv.innerHTML = String(props.label);

  return (
    <>
      <div className="progress" style={{ height: props.height }}>
        {progressDiv}
      </div>
    </>
  );
}

ProgressBarComponent.defaultProps = {
  height: "10px",
  progress: "20",
  progressMin: "0",
  progressMax: "100",
  label: "Progress bar",
  bgColor: "primary",
};
