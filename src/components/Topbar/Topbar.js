import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'
const Topbar = () => {
  return (

     <div className="navbar-top navbar-expand-lg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <ul
                            className="contact-info d-flex align-items-center list-unstyled mb-0 justify-content-center flex-md-row flex-column justify-content-lg-start">
                            <li><a href="#" className="text-decoration-none"> <i className="fa-solid fa-location-dot"></i> 1600
                                    Amphitheatre
                                    Parkway, CA 94043</a></li>
                            <li><a href="#" className="text-decoration-none"><i className="fa-solid fa-envelope"></i>
                                    vctung@outlook.com</a></li>
                        </ul>

                    </div>
                    <div className="col-lg-4">
                        <ul
                            className="social-icons d-flex justify-content-center justify-content-lg-end align-items-center list-unstyled mb-0">
                            <li><a href='#'> <i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                            <li><a href="#"> <i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"> <i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        


  )
}

export default Topbar