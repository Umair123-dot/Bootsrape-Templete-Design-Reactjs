import React from 'react'
import CourseImage1 from '../../assets/images/course.jpg';
import CourseImage2 from '../../assets/images/search.jpg';
const UserResearch = () => {
  return (
    <div className="course-details-wrapper">
    <div className="course-details-relate">
        <div className="container pt-3 pb-5 mb-3">
            <div className="row">
                <div className="course-content  text-center text-sm-start ">
                    <p className="course-head-small">Course detail</p>
                    <div className="col-12 col-md-6">
                        <p className="h2 couse-head-large">User Research for User Experience Design</p>
                    </div>
                </div>

            </div>

            <div className="row pt-4">

                <div className="col-12 col-md-12 col-lg-8">
                    <div className="coursedetails-image">
                        <img src={CourseImage1} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 mt-3 mt-sm-3 mt-md-3 mt-lg-0">
                    <div className="card coursedetail-main">


                        <ul className="list-group list-group-flush coursedetail-card-ul">
                            <li className="list-group-item coursedetail-card-li">Enrolled : <span>1200
                                    students</span></li>
                            <li className="list-group-item coursedetail-card-li">Duration : <span>2 hours</span>
                            </li>
                            <li className="list-group-item coursedetail-card-li">Lectures :<span> 8</span></li>
                            <li className="list-group-item coursedetail-card-li">Categories :<span>
                                    Technology</span></li>
                            <li className="list-group-item coursedetail-card-li">Level :<span> Intermediate
                                    Level</span></li>
                        </ul>

                        <img src={CourseImage2} height="167" width="75"
                            className="img-fluid mx-auto d-block img-setting" alt="..." />

                        <div className="d-card-text">
                            <p className="d-custumer text-center">Contact a customer support at </p>
                            <p className="d-mail text-center">vctung@outlook.com</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                    <div className="course-detail-heading pt-5">
                        <p className="h1 course-details-head">Description</p>
                        <p className="coursedetails-paragrape">The online Master of Computer and Information
                            Technology degree (MCIT Online)
                            is an online masters degree in Computer Science tailored for non-Computer
                            Science majors. Offered by the University of Pennsylvania, this new program
                            brings the long-running, established on-campus MCIT degree online. The MCIT
                            Online program empowers students without computer science backgrounds to succeed
                            in computing and technology fields. MCIT Online students come from diverse
                            academic
                            backgrounds ranging from business and history to chemistry and medicine.</p>
                        <p className="coursedetails-paragrap2">Computer science might not be in your past, but
                            it will be in your future. Technology has an immense impact on our lives, and is
                            creating fields and positions that didn’t exist five years ago. Equipped with a
                            competitive computer science degree, MCIT Online graduates will be uniquely
                            positioned to fill roles in finance, healthcare, education, and government, as
                            well as in the core software development industry. Exposure to real-world
                            projects throughout the

                            program will prepare students to utilize skills that positively impact society.
                        </p>
                    </div>

                </div>

            </div>
            <div className="row">
                <div className="course-detail-heading pt-5">
                    <div className="col-12 col-md-8">
                        <p className="h1 course-details-head">What You’ll Learn?</p>

                        <div className="d-flex de-course-list pb-1">

                            <i className="fa fa-check mr-3 text-primary pt-1  me-2"></i>
                            <p className="de-course-para"><span className="de-course-span">Ivy League Quality
                                </span>A first-of-its-kind program that offers an Ivy League master’s
                                degree in Computer Science designed for non-CS majors.</p>
                        </div>
                        <div className="d-flex de-course-list pb-3">

                            <i className="fa fa-check mr-3 text-primary pt-1  me-2"></i>
                            <p className="de-course-para"><span className="de-course-span">Built Around Your
                                    Schedule The coursework </span>is 100 percent online.
                                You’ll benefit from the same high-quality instruction as on-campus students
                                and graduate with the same degree.
                                The diploma does not indicate whether the degree was earned online or
                                on-campus.
                            </p>
                        </div>

                        <div className="d-flex de-course-list pt-5">

                            <i className="fa fa-check mr-3 text-primary pt-1 me-2"></i>
                            <p className="de-course-para"><span className="de-course-span">Try before you apply Penn
                                    Engineering </span>offers an online Specialization, Introduction
                                to Programming with Python and Java, on Coursera to help you
                                decide whether the MCIT Online program is the right fit before you apply.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default UserResearch