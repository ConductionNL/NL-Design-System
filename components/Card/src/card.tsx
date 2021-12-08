import * as React from "react";
import "../../style/card.css";

interface CardProps {
  title: string;
  cardHeader?: any;
  cardBody: any;
}

/**
 * This components renders a bootstrap card.
 * @returns JSX of the generated Card.
 */
export function Card(props: CardProps) {
  return (
    <div className="utrecht-card card">
      <div className="utrecht-card-header card-header">
        <div className="utrecht-card-head-row card-head-row row">
          {props.cardHeader !== null ? (
            <>
              <div className="col-6">
                <h4 className="utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start">
                  {props.title}
                </h4>
              </div>
              <div className="col-6 text-right">{props.cardHeader !== null && props.cardHeader()}</div>
            </>
          ) : (
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
