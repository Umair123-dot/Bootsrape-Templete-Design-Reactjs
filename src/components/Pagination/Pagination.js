import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pagination.scss";
const Pagination = ({
  showPerPage,
  onPaginationChange,
  counter,
  setCounter,
  onButtonClick,
  numberOfButtons,
  setLoading,
}) => {
  useEffect(() => {
    const value = showPerPage * counter;

    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const handleClick = (index) => {
    setLoading(true);
    setCounter(index + 1);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="pagination-wrapper d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" onClick={() => onButtonClick("prev")}>
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </li>

          {new Array(numberOfButtons).fill("").map((ele, index) => (
            <li
              className={`page-item ${index + 1 === counter ? "active" : null}`}
              key={ele.id}
            >
              <Link
                to="#"
                className="page-link"
                onClick={() => handleClick(index)}
              >
                {index + 1}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <Link
              to="#"
              className="page-link"
              onClick={() => onButtonClick("next")}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

// console.log(value-showPerPage);
// console.log(value)
// console.log(counter);
// console.log(showPerPage);
