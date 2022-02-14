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
export const ActionMenu: React.FC<ActionMenuProps> = ({ items, breakpoint, pageDescription }) => {
  const navigationItems = items.map((item) => (
    <a href={item.link} key={item.name}>
      <li className="utrecht-sidenav__item" key={item.name}>
        <span className="sidenav-span">
          <i className={item.icon} />
        </span>{" "}
        {item.name}
      </li>
    </a>
  ));

  return (
    <nav className={`utrecht-sidenav ${breakpoint}`}>
      <ul className="utrecht-sidenav__list">{navigationItems}</ul>
      {pageDescription !== null && (
        <>
          <br />
          <br />
          <p className="utrecht-paragraph">{pageDescription}</p>
        </>
      )}
    </nav>
  );
};
