import * as React from "react";
import "../../style/actionMenu.css";
import { Breakpoint } from "../../Enums/breakpoint";

interface ActionMenuProps {
  items: Array<Partial<Record<"name" | "icon" | "link", any>>>;
  pageDescription?: string;
  breakpoint?: Breakpoint;
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
          <i className={item.icon} /> {item.name}
        </span>
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
