import React from 'react'
import logo2 from '../../assets/images/logo2.png';
const Footer = () => {
  return (
    <div>
    <footer className="footer">
    <div className="footer-top">
        <div className="container">
            <div className="row d-flex justify-content-center">

                <div className="col-lg-5 col-md-8 mt-5 mb-5">
                    <div className="footer-p">
                        <a className="navbar-brand" href="#">
                            <img src={logo2} width="70" height="55" className="img-fluid img-footer"
                                alt=""/>
                            <span>FOR EDUCATION</span>

                        </a>
                        <ul
                            className="contact-info1  pt-4 align-items-center list-unstyled mb-0 justify-content-center flex-md-row flex-column justify-content-lg-start">
                            <li><a href="#" className="text-decoration-none"> <i className="fa-solid fa-location-dot"></i>
                                    1600
                                    1500 Treat Ave, Suite 200
                                    San Francisco, CA 94110</a></li>
                            <li><a href="#" className="text-decoration-none"><i className="fa-solid fa-envelope"></i>
                                    vctung@outlook.com</a></li>
                            <li><a href="#" className="text-decoration-none"> <i className="fa-solid fa-location-dot"></i>
                                    1600
                                    1-800-800-2299 (Support)</a></li>



                        </ul>
                    </div>
                </div>


                <div className="col-lg-2 col-md-2 mt-5">
                    <div className="footer-p">
                        <p className="ft-info-heading">Community</p>
                        <ul className="info-footer-top list-unstyled">
                            <li> <a href="#" className="ft-info-link text-decoration-none">Learners</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Partners</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Developers</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Beta Testers</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Translators</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Blog</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Tech Blog</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Teaching center</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-8 mt-5">
                    <div className="footer-p">
                        <p className="ft-info-heading">Information</p>
                        <ul className="info-footer-top list-unstyled">
                            <li> <a href="#" className="ft-info-link text-decoration-none">About</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Pricing</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Blog</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Careers</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Contact</a></li>

                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 mt-5 mb-4">
                    <div className="footer-p">
                        <p className="ft-info-heading">More</p>
                        <ul className="info-footer-top list-unstyled">
                            <li> <a href="#" className="ft-info-link text-decoration-none">Press</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Investors</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Terms</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Privacy</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Help</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Accessibility</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Contact</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Artices</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Dictory</a></li>
                            <li> <a href="#" className="ft-info-link text-decoration-none">Affiliates</a></li>

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
                        <li><a href="#"> <i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                        <li><a href="#"> <i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"> <i className="fa-brands fa-instagram"></i></a></li>
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