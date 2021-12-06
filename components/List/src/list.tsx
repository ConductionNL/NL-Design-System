import * as React from "react";

interface ListProps {
  items: Array<Partial<Record<"name" | "render", any>>>;
}

/**
 * This components renders bootstrap list.
 *
 * @returns JSX of the generated List.
 */
export default function List(props: ListProps) {
  const liItems = props.items.map((item) => (
    <li className="list-group-item" key={item.name}>
      {item.render !== undefined && item.render !== null ? item.render() : item.name}
    </li>
  ));
  return (
    <section className="utrecht-html">
      <ul className="list-group-item">{liItems}</ul>
    </section>
  );
}
