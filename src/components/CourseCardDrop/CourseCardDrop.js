import React, { useState } from "react";

import cardDataCourse from "../../data/mocks/CardUserCourse";
// import DropDownData from "../../data/mocks/DropDownData";
import Card from "../Card/Card";
import Pagination from "../Pagination";
import Loader from "../Loader/Loader";
import Dropdown from "../Dropdown/Dropdown";
import { categoryDropDownData ,levelDropDownData,languageDropDownData,instructorDropDownData} from "../../data/mocks/DropDownData";

const CourseCardDrop = () => {
  const [showPerPage, setShowPerPage] = useState(9);
  const [filterTextValue, setFilterTextValue] = useState("");
  
 

  const [numberOfButtons, setnumberOfButtons] = useState(
    Math.ceil(cardDataCourse.length / showPerPage)
  );
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
    console.log({ start, end });
  };
  const onButtonClick = (type) => {
    console.log("on click");
    setLoading(true);
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
        setLoading(false);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
        setLoading(false);
      } else {
        setCounter(counter + 1);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
 
  console.log(
    cardDataCourse
      .slice(pagination.start, pagination.end)
      .filter((item) => item.category.includes(filterTextValue))
  );

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
              <Dropdown
                item={categoryDropDownData}
                setFilterTextValue={(val) => setFilterTextValue(val)}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
              <Dropdown
                item={levelDropDownData}
                setFilterTextValue={(val) => setFilterTextValue(val)}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
              <Dropdown
                item={languageDropDownData}
                setFilterTextValue={(val) => setFilterTextValue(val)}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
              <Dropdown
                item={instructorDropDownData}
                setFilterTextValue={(val) => setFilterTextValue(val)}
              />
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
      {!loading ? (
        <div className="select-course-wrapper ">
          <div className="container">
            <div className="row gy-4">
              {filterTextValue.length
                ? cardDataCourse
                    .filter((item) => item.category === filterTextValue)
                    .slice(pagination.start, pagination.end)
                    .map((card) => <Card key={card.id} {...card} />)
                : cardDataCourse
                    .slice(pagination.start, pagination.end)

                    .map((card) => <Card key={card.id} {...card} />)}
            </div>
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={cardDataCourse.length}
              loading={loading}
              setLoading={setLoading}
              counter={counter}
              setCounter={setCounter}
              onButtonClick={onButtonClick}
              numberOfButtons={numberOfButtons}
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
