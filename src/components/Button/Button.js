import React from "react";
import { Loader } from "../Loader";

const Button = (props) => {
  const {
    onClick = () => {},
    className = "",
    title,
    type = "button",
  
    isLoading = false,
  } = props;
  return (
    <button className={`${className}`} type={type} onClick={onClick}>
      {isLoading ? <Loader />
       : (
        title
      )}
    </button>
  );
};

export default Button;
