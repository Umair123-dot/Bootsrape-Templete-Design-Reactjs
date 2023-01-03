import React from "react";
import { Link } from "react-router-dom";
import ItImage from '../../assets/images/Analytic.png'

const Itsection = () => {
  return (
    <div className="it-wreapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="text">
              <h4>Become Master</h4>
              <h1>Learn New Skills Online</h1>
              <h1>Find Best Courses</h1>
              <div className="multi-btns">
                <Link to="#" className="btn">
                  Get a Quote
                </Link>
                <Link to="" className="btn btn-second">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="image">
              <img src={ItImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itsection;
