import * as React from "react";
import "../../style/card.css";

interface CardProps {
  title?: string;
  cardHeader?: any;
  cardBody: any;
  divider?: boolean;
}

/**
 * This components renders a bootstrap card.
 * @returns JSX of the generated Card.
 */
export function Card(props: CardProps) {
  const [dividerStyle, setDividerStyle] = React.useState({});

  React.useEffect(() => {
    if (typeof window !== "undefined" && typeof window !== undefined) {
      if (props.divider === false) {
        setDividerStyle({
          borderBottom: "0 !important",
          paddingBottom: "0 !important",
        });
      }
    }
  }, []);

  return (
    <div className="utrecht-card card">
      <div className="utrecht-card-header card-header" style={dividerStyle}>
        {console.log(dividerStyle)}
        <div className="utrecht-card-head-row card-head-row row">
          {props.title !== null && props.cardHeader !== null && (
            <>
              <div className="col-6">
                <h4 className="utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start">
                  {props.title}
                </h4>
              </div>
              <div className="col-6 text-right">{props.cardHeader !== null && props.cardHeader()}</div>
            </>
          )}
          {props.title !== null && props.cardHeader === null && (
            <div className="col-12">
              <h4 className="utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start">
                {props.title}
              </h4>
            </div>
          )}
        </div>
      </div>
      <div className="utrecht-card-body card-body">{props.cardBody !== null && props.cardBody()}</div>
    </div>
  );
}

Card.defaultProps = {
  cardHeader: null,
  cardBody: null,
};
