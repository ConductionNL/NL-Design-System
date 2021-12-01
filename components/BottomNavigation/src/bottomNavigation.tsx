import * as React from "react";
import '../../style/bottomNavigation.css';

// export enum Breakpoint {
//   mobile = "sm",
//   tablet = "md",
//   desktop = "lg",
// }

interface BottomNavigationProps {
  items: Array<Partial<Record<"name" | "render", any>>>;
  pageDescription?: string;
  // breakpoint?: Breakpoint;
}

/**
 * This components renders a horizontal menu.
 *
 * @returns TSX of the generated BottomNavigation.
 */
export default function BottomNavigation(props: BottomNavigationProps) {
  const navigationItems = props.items.map((item) => (
    <li className="utrecht-sidenav__item" key={item.name}>
      {item.render()}
    </li>
  ));

  return (
    <nav className={`utrecht-sidenav`}>
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
