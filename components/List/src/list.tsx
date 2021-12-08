import * as React from "react";

interface ListProps {
  items: Array<Partial<Record<"name" | "value", any>>>;
}

/**
 * This components renders bootstrap list.
 *
 * @returns JSX of the generated List.
 */
export function List(props: ListProps) {
  const liItems = props.items.map((item) => (
    <li className="list-item" key={item.name}>
      {item.value !== null ? `${item.name}: ${item.value}` : item.name}
    </li>
  ));
  return (
    <section className="utrecht-html">
      <ul className="list">{liItems}</ul>
    </section>
  );
}
