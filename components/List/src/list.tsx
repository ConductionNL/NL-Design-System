import * as React from "react";

interface ListProps {
  items: Array<Partial<Record<"name" | "value" | "href", any>>>;
  link?: boolean;
  group?: boolean;
  groupFlush?: boolean;
  icon?: any;
}

/**
 * This components renders bootstrap list.
 *
 * @returns JSX of the generated List.
 */
export function List(props: ListProps) {
  const liItems = props.items.map((item) =>
    props.link ? (
      <a href={item.href !== null ? item.href : "#"} className="list-group-item list-group-item-action" key={item.name}>
        {item.value === null ? item.name : `${item.name}: ${item.value}`}
        {props.icon !== null && <span className="list-icon">{props.icon()}</span>}
      </a>
    ) : (
      <li className={props.group ? "list-group-item" : "list-item"} key={item.name}>
        {item.value === null ? item.name : `${item.name}: ${item.value}`}
        {props.icon !== null && <span className="list-icon">{props.icon()}</span>}
      </li>
    ),
  );
  return (
    <section className="utrecht-html">
      <ul className={props.group && props.groupFlush ? `list-group list-group-flush` : "list"}>{liItems}</ul>
    </section>
  );
}

List.defaultProps = {
  href: null,
  value: null,
};
