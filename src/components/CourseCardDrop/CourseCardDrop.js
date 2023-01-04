import React, { useState } from "react";

import cardDataCourse from "../../data/mocks/CardUserCourse";
import Card from "../Card/Card";
import Pagination from "../Pagination";
import Loader from "../Loader/Loader";

const CourseCardDrop = () => {
  const [showPerPage, setShowPerPage] = useState(9);
  const [numberOfButtons, setnumberOfButtons] = useState(
    Math.ceil(cardDataCourse.length / showPerPage)
  );
  const [counter, setCounter] = useState(1);
  const [loading,setLoading] =useState(false);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
// const startPaginationVal = pagination.start
// const endPaginationVal = pagination.end


  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  const onButtonClick = (type) => {
    console.log("on click")
    setLoading(true)
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
setTimeout(() => {
  setLoading(false)
}, 2000);
  };
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
      {!loading ? (
        <div className="select-course-wrapper ">
          <div className="container">
            <div className="row gy-4">
              {cardDataCourse
                .slice(pagination.start, pagination.end)
                .map((card) => (
                  <Card key={card.id} {...card} />
                ))}
            </div>
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={cardDataCourse.length}
              loading = {loading}
              setLoading = {setLoading}
              counter = {counter}
              setCounter = {setCounter}
              onButtonClick = {onButtonClick}
              numberOfButtons = {numberOfButtons}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CourseCardDrop;
