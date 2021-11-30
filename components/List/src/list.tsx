import * as React from "react";

interface ListProps {
  items: Array<Record<"name", any>>;
}

/**
 * This components renders bootstrap list.
 *
 * @returns JSX of the generated List.
 */
export default function List(props: ListProps) {
  const liItems = props.items.map((item) => (
    <li className="list-group-item" key={item.name}>
      {item.name}
    </li>
  ));
  return (
    <section className="utrecht-html">
      <ul className="list-group-item">{liItems}</ul>
    </section>
  );
}
