import * as React from "react";

interface TabsProps {
  tabs: {
    name: string,
    active: boolean,
    id: string,
    onClick?: () => void
  }[]
}

/**
 * This components renders tabs.
 * @returns JSX of the generated tabs.
 */
export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const navItems = tabs.map((item) => (
    <li className="nav-item" role="presentation" key={item.name} onClick={item?.onClick}>
      <a
        className={item?.active ? "nav-link active" : "nav-link"}
        id={item.id + "-tab"}
        data-bs-toggle="tab"
        data-bs-target={"#" + item.id}
        role="tab"
        aria-controls={item.id}
        aria-selected="true"
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <div className="page-navs bg-white">
      <ul className="nav nav-tabs nav-line d-flex w-100" id="myTab" role="tablist">
        {navItems}
      </ul>
    </div>
  );
};
