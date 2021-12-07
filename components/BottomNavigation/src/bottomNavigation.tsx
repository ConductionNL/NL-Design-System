import * as React from "react";
import "../../style/bottomNavigation.css";

export enum BreakpointBottomNavigation {
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop",
}

interface BottomNavigationProps {
  items: Array<Partial<Record<"name" | "icon" | "link", any>>>;
  pageDescription?: string;
  iconSize?: string;
  breakpoint?: BreakpointBottomNavigation;
}

/**
 * This components renders a vertical menu at the bottom of the page.
 *
 * @returns JSX of the generated Bottom navigation.
 */
export function BottomNavigation(props: BottomNavigationProps) {
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
    <nav className={`utrecht-bottomNav  fixed-bottom ${props.breakpoint}`}>
      <ul className="navbar nav">{navigationItems}</ul>
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
