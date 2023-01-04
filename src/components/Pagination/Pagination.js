import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import "./Pagination.scss";
const Pagination = ({ showPerPage, onPaginationChange, setLoading, counter, setCounter,onButtonClick,numberOfButtons }) => {
  
 
  

  useEffect(() => {
     setLoading(true)
    const value = showPerPage * counter;

    // console.log(value-showPerPage);
    // console.log(value)
    // console.log(counter);
    // console.log(showPerPage);
    onPaginationChange(value - showPerPage, value);
    setLoading(false)
  }, [counter]);

 
  return (
    <div className="pagination-wrapper d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" onClick={() => onButtonClick("prev")}>
            <i class="fa-solid fa-arrow-left"></i>
            </a>
          </li>

          {new Array(numberOfButtons).fill("").map((ele, index) => (
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a class="page-link" onClick={() => setCounter(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}

          <li class="page-item">
            <a class="page-link" onClick={() => onButtonClick("next")}>
            <i class="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
