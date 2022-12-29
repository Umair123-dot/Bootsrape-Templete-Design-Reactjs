import React from "react";
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav
        className="navbar navbar2 navbar-expand-lg nav-pills"
        id="pills-tab"
        role="tablist"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              width="60"
              height="52"
              className="img-fluid"
              alt=""
            />
            <span>FOR EDUCATION</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            

            <span className="fa-solid fa-bars" style={{color:"#002147"}}></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav nav-pills   ms-auto mb-3  mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/course">
                  Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coursedetail">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex search" role="search">
              <button className="btn1" type="submit">
                Sign Up
              </button>

              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
