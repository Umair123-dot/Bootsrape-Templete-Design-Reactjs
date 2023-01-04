import React from "react";

// images

//Components

import { Itsection } from "../../components/It-section";
import { TimingCourse } from "../../components/TimingCourse";
import Card from "../../components/Card/Card";
import { FeedbackStudent } from "../../components/FeedbackStudent";
import ResultStudents from "../../components/ResultStudents/ResultStudents";
import Subscribe from "../../common/Subscribe/Subscribe";
import cardData from "../../data/mocks/CardTopFeatures";


const Home = () => {
  return (
    <div>
      <Itsection />
      <TimingCourse />
      <div className="top-feature-wrappers">
      <div className="container">
        <div className="row g-4 mb-5">
          
            {cardData.slice(0,8).map((card) => (
              <Card key={card.id} {...card} />
            ))}
          
        </div>
        
      </div>
      </div>

      <FeedbackStudent />
      <ResultStudents />
      <Subscribe />
    </div>
  );
};

export default Home;
