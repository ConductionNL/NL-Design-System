import * as React from "react";

interface BreadcrumbsProps {
  items: Array<Partial<Record<"name" | "render" | "link", any>>>;
}

/**
 * This components renders bootstrap breadcrumbs.
 *
 * @returns JSX of the generated breadcrumbs.
 */
export function Breadcrumbs(props: BreadcrumbsProps) {
  const liItems = props.items.map((item) => (
    <li className="utrecht-breadcrumb__item" key={item.name}>
      {item.link !== undefined && item.link !== null ? <a className="utrecht-breadcrumb__link" href={item.link}>{item.render()}</a> : item.render()}
    </li>
  ));

  return (
    <nav className="utrecht-breadcrumb">
      <ol className="utrecht-breadcrumb__list">{liItems}</ol>
    </nav>
  );
}
