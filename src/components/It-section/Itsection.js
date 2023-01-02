import React from "react";
import { Link } from "react-router-dom";
import ItImage from '../../assets/images/Analytic.png'

const Itsection = () => {
  return (
    <div class="it-wreapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-7">
            <div class="text">
              <h4>Become Master</h4>
              <h1>Learn New Skills Online</h1>
              <h1>Find Best Courses</h1>
              <div class="multi-btns">
                <Link href="#" class="btn">
                  Get a Quote
                </Link>
                <Link href="" class="btn btn-second">
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-5">
            <div class="image">
              <img src={ItImage} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itsection;
