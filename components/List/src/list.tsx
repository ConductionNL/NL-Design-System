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
    <li className="utrecht-unordered-list__item" key={item.name}>
      {item.value !== null ? `${item.name}: ${item.value}` : item.name}
    </li>
  ));
  return (
    <section className="utrecht-html">
      <ul className="utrecht-unordered-list utrecht-unordered-list--distanced">{liItems}</ul>
    </section>
  );
}
