import React from "react";

import cardDataCourse from "../../data/mocks/CardUserCourse";
import Card from "../Card/Card";

const CourseCardDrop = () => {
  return (
    <div className="course-wrapper">
      <div className="course-relate">
        <div className="container pt-5 mb-5">
          <div className="row">
            <div className="course-content  text-center text-sm-start ">
              <p className="course-head-small">Course category</p>
              <p className="h2 couse-head-large">Web Development</p>
            </div>
          </div>
          <div className="row  pt-3">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
              <div className="row mb-2">
                <span className="label course-label">Categories</span>
              </div>
              <div className="row ">
                <div className="btn-group">
                  <button className="btn btn-lg course-button" type="button">
                    Web development
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg course-drop-arrow  dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="fa-solid fa-angle-down"></span>
                  </button>
                  <ul className="dropdown-menu">...</ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
              <div className="row mb-2">
                <span className="label course-label">Level</span>
              </div>
              <div className="row ">
                <div className="btn-group">
                  <button className="btn btn-lg course-button" type="button">
                    All Level
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg course-drop-arrow  dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="fa-solid fa-angle-down"></span>
                  </button>
                  <ul className="dropdown-menu">...</ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
              <div className="row mb-2">
                <span className="label course-label">English</span>
              </div>
              <div className="row ">
                <div className="btn-group">
                  <button className="btn btn-lg course-button" type="button">
                    English
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg course-drop-arrow  dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="fa-solid fa-angle-down"></span>
                  </button>
                  <ul className="dropdown-menu">...</ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
              <div className="row mb-2">
                <span className="label course-label">Instructor</span>
              </div>
              <div className="row ">
                <div className="btn-group">
                  <button className="btn btn-lg course-button" type="button">
                    All Instructor
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg course-drop-arrow  dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="fa-solid fa-angle-down"></span>
                  </button>
                  <ul className="dropdown-menu">...</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="select-course-wrapper">
        <div className="container">
          <div className="row gy-4">
            {cardDataCourse.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardDrop;
