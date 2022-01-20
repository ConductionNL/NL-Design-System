import * as React from "react";
import "../../style/card.css";

interface CardProps {
  title?: string;
  cardHeader?: () => JSX.Element;
  cardBody: () => JSX.Element;
  divider?: boolean;
}

/**
 * This components renders a bootstrap card.
 * @returns JSX of the generated Card.
 */
export const Card: React.FC<CardProps> = ({ title, cardHeader, cardBody, divider }) => {
  return (
    <div className="utrecht-card card">
      {divider ? (
        <>
          <div className="utrecht-card-header card-header">
            <div className="utrecht-card-head-row card-head-row row">
              {title !== null && cardHeader !== null && (
                <>
                  <div className="col-6">
                    <h4 className="utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start">
                      {title}
                    </h4>
                  </div>
                  <div className="col-6 text-right">{cardHeader && cardHeader()}</div>
                </>
              )}
              {title && !cardHeader && (
                <div className="col-12">
                  <h4 className="utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start">
                    {title}
                  </h4>
                </div>
              )}
            </div>
          </div>
          <div className="utrecht-card-body card-body">{cardBody()}</div>
        </>
      ) : (
        <div className="utrecht-card-body card-body">
          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced utrecht-card-title text-start">{title}</h4>
          {cardBody()}
        </div>
      )}
    </div>
  );
};
