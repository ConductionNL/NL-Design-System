import * as React from "react";

interface ActionMenuProps {
  items: Array<Partial<Record<"name" | "render", any>>>;
  pageDescription?: string;
}

/**
 * This components renders a horizontal menu.
 *
 * @returns TSX of the generated ActionMenu.
 */
export default function ActionMenu(props: ActionMenuProps) {

  const actionItems = props.items.map((item) =>
    <li className="utrecht-sidenav__item" key={item.name}>
      {item.render()}
    </li>
  )

  return (
    <nav className="utrecht-sidenav">
      <ul className="utrecht-sidenav__list">
        {
          actionItems
        }
      </ul>
      {
        props.pageDescription !== null &&
        <>
          <br /><br />
          <p className="utrecht-paragraph">
            {props.pageDescription}
          </p>
        </>
      }
    </nav>
  );
}
