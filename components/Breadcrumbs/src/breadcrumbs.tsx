import * as React from "react";

interface BreadcrumbsProps {
  items: Array<Partial<Record<"name" | "render", any>>>;
}

/**
 * This components renders bootstrap breadcrumbs.
 *
 * @returns TSX of the generated breadcrumbs.
 */
export default function Breadcrumbs(props: BreadcrumbsProps) {
  const liItems = props.items.map((item) => (
    <li className="utrecht-breadcrumb__item" key={item.name}>
      {item.render()}
    </li>
  ));

  return (
    <nav className="utrecht-breadcrumb">
      <ol className="utrecht-breadcrumb__list">{liItems}</ol>
    </nav>
  );
}
