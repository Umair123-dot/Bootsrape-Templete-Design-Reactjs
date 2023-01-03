import React from "react";
import { Link } from "react-router-dom";
const PricingCard = (props) => {
  const { card } = props;
  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="price-main-section shadow rounded">
        <div className="d-flex align-content-center justify-content-center">
          <p className="price-main-head text-center">{card.enterPrises}</p>
        </div>

        <div className="p-4">
          <h1 className="h6 price-one">
            $ <sup className="h4 price-one">{card.price1}</sup>
            <span className="h1 price-starter">{card.price2}.</span>
            <span className="h3 price-oneprice-one">00</span>
          </h1>
          <p className="price-sub-heading h7">{card.privateLimmited}</p>
          <hr />
          <ul className="list-unstyled py-3 text-small text-left">
            <li className="mb-1">
              <i className="fa fa-check mr-3 text-primary"></i>
              {card.access}
            </li>
            <li className="mb-1">
              <i className="fa fa-check mr-3 text-primary"></i>
              {card.offline}
            </li>
            <li className="mb-1">
              <i className="fa fa-check mr-3 text-primary"></i>
              {card.discussion}
            </li>
            <li className="mb-1">
              <i className={`fa fa-check mr-3  ${card.textchange}`}></i>
              {card.PrivateS}
            </li>
            <li className="mb-1">
              <i className={`fa fa-check mr-3  ${card.textchange1}`}></i>
              {card.privateWork}
            </li>
          </ul>
          <Link
            to="#"
            className={`btn btn-primary btn-block w-100 p-2`}
            style={{
              backgroundColor: card.bg,
              border: card.border1,
              color: card.color,
            }}
          >
            {card.LinkButton}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
