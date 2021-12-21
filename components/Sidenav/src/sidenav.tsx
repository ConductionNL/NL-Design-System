import * as React from "react";

interface SidenavProps {
  items: Array<Partial<Record<"name" | "href" | "active" | "current", any>>>;
}

/**
 * This components renders bootstrap Sidenav.
 *
 * @returns JSX of the generated Sidenav.
 */
 function Sidenav(props: SidenavProps) {
  const liNav = props.items.map((item) => (
    <li className="nav-item" key={item.name}>
      <a
        className={`nav-link ${item.active !== null && item.active}`}
        aria-current={item.current !== null && item.current}
        href={item.href !== null ? item.href : "#"}
      >
        {item.name}
      </a>
    </li>
  ));
  return <ul className="nav flex-column">{liNav}</ul>;
}
