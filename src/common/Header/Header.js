import React from "react";
import logo from '../../assets/images/logo.png';
import { NavLink } from "react-router-dom";
import  Button  from "../../components/Button";


const Header = () => {
  // const [loading, setLoading] = useState(false)

  let activeStyle = {
    backgroundColor:"#fdc800",
    borderRadius:"5px"
    
  };
  return (
    <div className="">
      <nav
        className="navbar navbar2 navbar-expand-lg"
       
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              width="60"
              height="52"
              className="img-fluid"
              alt=""
            />
            <span>FOR EDUCATION</span>
          </NavLink>
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
            <ul className="navbar-nav  ms-auto mb-3  mb-lg-0"  >
              <li className="nav-item">
                <NavLink className="nav-link" 
                style={({isActive})=> isActive ? activeStyle:undefined} to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" 
                style={({isActive})=>isActive ? activeStyle:undefined} to="/about" exact>
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" 
                style={({isActive})=>isActive ? activeStyle:undefined
              } to="/course" exact>
                  Course
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"
                style={({isActive})=> isActive ? activeStyle:undefined} to="/detailcourse" exact>
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex search" role="search">
              {/* <button className="btn1" type="submit">
                Sign Up
              </button> */}
              <Button className='btn1' title="Sign Up" type="submit"  />
              {/* isLoading={loading} */}
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
