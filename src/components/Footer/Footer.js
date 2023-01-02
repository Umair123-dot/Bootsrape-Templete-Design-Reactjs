import React from 'react'
import logo2 from '../../assets/images/logo2.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
    <footer className="footer">
    <div className="footer-top">
        <div className="container">
            <div className="row d-flex justify-content-center">

                <div className="col-lg-5 col-md-8 mt-5 mb-5">
                    <div className="footer-p">
                        <Link className="navbar-brand" to="#">
                            <img src={logo2} width="70" height="55" className="img-fluid img-footer"
                                alt=""/>
                            <span>FOR EDUCATION</span>

                        </Link>
                        <ul
                            className="contact-info1  pt-4 align-items-center list-unstyled mb-0 justify-content-center flex-md-row flex-column justify-content-lg-start">
                            <li><Link to="#" className="text-decoration-none"> <i className="fa-solid fa-location-dot"></i>
                                    1600
                                    1500 Treat Ave, Suite 200
                                    San Francisco, CA 94110</Link></li>
                            <li><Link to="#" className="text-decoration-none"><i className="fa-solid fa-envelope"></i>
                                    vctung@outlook.com</Link></li>
                            <li><Link to="#" className="text-decoration-none"> <i className="fa-solid fa-location-dot"></i>
                                    1600
                                    1-800-800-2299 (Support)</Link></li>



                        </ul>
                    </div>
                </div>


                <div className="col-lg-2 col-md-2 mt-5">
                    <div className="footer-p">
                        <p className="ft-info-heading">Community</p>
                        <ul className="info-footer-top list-unstyled">
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Learners</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Partners</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Developers</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Beta Testers</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Translators</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Blog</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Tech Blog</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Teaching center</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-8 mt-5">
                    <div className="footer-p">
                        <p className="ft-info-heading">Information</p>
                        <ul className="info-footer-top list-unstyled">
                            <li> <Link to="#" className="ft-info-link text-decoration-none">About</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Pricing</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Blog</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Careers</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Contact</Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 mt-5 mb-4">
                    <div className="footer-p">
                        <p className="ft-info-heading">More</p>
                        <ul className="info-footer-top list-unstyled">
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Press</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Investors</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Terms</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Privacy</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Help</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Accessibility</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Contact</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Artices</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Dictory</Link></li>
                            <li> <Link to="#" className="ft-info-link text-decoration-none">Affiliates</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="ftr-bottom">
        <div className="container">
            <div className="row p-md-4">
                <div className="col-12 col-md-12 col-lg-6 mt-4 mt-sm-0 my-lg-3">
                    <div className="copyright d-flex justify-content-center justify-content-lg-start">
                        Copyright &copy; <strong><span>Umair</span></strong>. All Rights Reserved
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-6 footer-right pt-2 pt-md-0  mt-md-0 my-lg-3">

                    <ul
                        className="social-icons d-flex justify-content-center justify-content-lg-end align-items-center list-unstyled mb-0">
                        <li><Link to="#"> <i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-pinterest"></i></Link></li>
                        <li><Link to="#"> <i className="fa-brands fa-twitter"></i></Link></li>
                        <li><Link to="#"> <i className="fa-brands fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </footer>

</div>
  )
}

export default Footer