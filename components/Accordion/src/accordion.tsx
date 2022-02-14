import * as React from "react";

interface AccordionItem {
  id: string;
  title: string;
  render: () => JSX.Element;
  backgroundColor?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  id: string;
}

/**
 * This components renders an bootstrap accordion.
 * @returns JSX of the generated accordion.
 */
export const Accordion: React.FC<AccordionProps> = ({ items, id }) => {
  return (
    <div className="accordion mt-4" id={`${id}Accordion`}>
      {items.map((item, idx) => (
        <div key={item.title + idx} className="accordion-item">
          <h2 className="accordion-header" id={item.id}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}Collapse`}
              aria-expanded="false"
              aria-controls={`${item.id}Collapse`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={item.id + "Collapse"}
            className="accordion-collapse collapse"
            aria-labelledby={item.id}
            data-bs-parent={`#${item.id}Accordion`}
          >
            <div className="accordion-body" style={{ backgroundColor: item.backgroundColor }}>
              {item.render()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
