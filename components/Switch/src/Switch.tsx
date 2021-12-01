import * as React from "react";
import {useState} from "react";
import "../../style/switch.css";

interface SwitchProps {
  id: string;
  name: string;
}

/**
 * This components renders a switch.
 *
 * @returns JSX of the generated Switch.
 */
export default function Switch(props: SwitchProps) {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <div>
      <label id={props.id}>{props.name}</label>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle}/>
        <span className="switch"/>
      </label>
    </div>
  );
}
