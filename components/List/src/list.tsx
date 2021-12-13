import * as React from "react";

interface ListProps {
  items: Array<Partial<Record<"name" | "value", any>>>;
  link?: boolean;
  href?: string;
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
  const liItems = props.items.map((item) => (
    props.link ? (
      <a href={props.href !== null ? props.href : '#'} className="list-group-item list-group-item-action" key={item.name}>
        {item.value == null ? item.name : `${item.name}: ${item.value}`}
        {props.icon !== null && props.icon()}
      </a>
    ) : (
      <li className={props.group ? "list-group-item" : "list-item"} key={item.name}>
        {item.value == null ? item.name : `${item.name}: ${item.value}`}
      </li>
    )
  ));
  return (
    <section className="utrecht-html">
      <ul className={props.group && props.groupFlush ? `list-group list-group-flush` : "list" }>{liItems}</ul>
    </section>
  );
}
