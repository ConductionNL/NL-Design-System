import * as React from "react";
import "../../style/bottomNavigation.css";

export enum Breakpoint {
  mobile = "small",
  tablet = "medium",
  desktop = "large",
}

interface BottomNavigationProps {
  items: Array<Partial<Record<"name" | "icon" | "link", any>>>;
  pageDescription?: string;
  breakpoint?: Breakpoint;
  iconSize?: string;
}

/**
 * This components renders a horizontal menu.
 *
 * @returns JSX of the generated BottomNavigation.
 */
export default function BottomNavigation(props: BottomNavigationProps) {
  const navigationItems = props.items.map((item) => (
    <a href={item.link}>
      <li className="utrecht-sidenav__item" key={item.name}>
        <span><i className={item.icon} /> {item.name}</span>
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
