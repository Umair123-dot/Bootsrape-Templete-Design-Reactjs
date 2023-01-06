import React, { useState } from "react";

import "./Dropdown.scss";

const Dropdown = ({ setFilterTextValue, item }) => {
  console.log(item);
  function onChangeHandle(event) {
    setFilterTextValue(event.target.value);

    //  props.onFilterValueSelected(event.target.value);
  }
  console.log(item.dropDownOptions);
  return (
    <div>
      <div className="row mb-2">
        <span className="label course-label">{item.categories}</span>
      </div>
      <div className="row">
        <select
          className="form-select dropdown"
          aria-label="Default select example"
          onChange={onChangeHandle}
        >
          {/* <option selected>{item.option}</option> */}
          {item.dropDownOptions.map((course) => {
            return <option value={course.name}>{course.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
