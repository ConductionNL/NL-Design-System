import * as React from "react";
import "../../style/actionMenu.css";

export enum BreakpointActionMenu {
  mobile = "small",
  tablet = "medium",
  desktop = "large",
}

interface ActionMenuProps {
  items: Array<Partial<Record<"name" | "icon" | "link", any>>>;
  pageDescription?: string;
  breakpoint?: BreakpointActionMenu;
  iconSize?: string;
}

/**
 * This components renders a horizontal menu.
 *
 * @returns JSX of the generated ActionMenu.
 */
export function ActionMenu(props: ActionMenuProps) {
  const navigationItems = props.items.map((item) => (
    <a href={item.link} key={item.name}>
      <li className="utrecht-sidenav__item" key={item.name}>
        <span>
          <i className={item.icon} />
        </span>{" "}
        {item.name}
      </li>
    </a>
  ));

  return (
    <nav className={`utrecht-sidenav ${props.breakpoint}`}>
      <ul className="utrecht-sidenav__list">{navigationItems}</ul>
      {props.pageDescription !== null && (
        <>
          <br />
          <br />
          <p className="utrecht-paragraph">{props.pageDescription}</p>
        </>
      )}
    </nav>
  );
}
