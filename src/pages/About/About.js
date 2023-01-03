import React from "react";
import Pricing from "../../common/Pricing/Pricing";
import Subscribe from "../../common/Subscribe/Subscribe";
import PricingCard from "../../components/PricingCard/PricingCard";
import CardPricingData from "../../data/mocks/CardPricingData";
const About = () => {
  return (
    <div>
      <div className="price-wrapper">
        <div className="container pt-5">
          <div className="price-section">
            <Pricing />
            <div className="row">
              {CardPricingData.map((card) => (
                <PricingCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default About;
