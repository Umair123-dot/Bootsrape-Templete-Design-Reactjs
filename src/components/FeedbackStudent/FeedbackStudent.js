import React from "react";
import bgImage from "../../assets/images/bg-feedback.png";
import UpperImage from "../../assets/images/character.png";
import feebackImage from "../../assets/images/feedback-image.png";
const FeedbackStudent = () => {
  return (
    <div className="feedback-wrapper">
      <div className="container mb-5">
        <div className="row pt-3">
          <div className="col-12 col-md-6 pt-5">
            <div className="course-detail-image">
              <img src={bgImage} alt="" className="img-fluid" />
              <div className="detail-image  ms-md-0">
                <img src={UpperImage} alt="" className="img-fluid" />
              </div>
              <div className="detail-content text-center ">
                <p className="detail-short-head">Kimmie Vo</p>
                <p className="detail-short-para">Junior Designer</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-5">
            <div className="course-detail-content">
              <p className="coursed-feedb-heading">Successful Student</p>
              <p className="course-bg">Feedback</p>
              <p className="coursed--para">
                Take courses from the world’s best instructors and universities.
                Courses include recorded auto-graded and peer-reviewed
                assignments, video lectures, and community discussion forums.
                When you complete a course, you’ll be eligible to receive a
                shareable electronic Course Certificate for a small fee.
              </p>
              <p className="detail-feedb-small">
                The courses that Kimmie has taken
              </p>

              <div className="coursed-feedb-image d-flex">
                <div className="coursed-image-sec pt-4 pt-md-4 pt-lg-1 ">
                  <img
                    src={feebackImage}
                    className="img-fluid rounded"
                    alt="..."
                  />
                </div>
                <div className="feedb-image-con">
                  <p className="h5 coused-feedb-image-head">
                    Modern and Contemporary Art and Design
                  </p>
                  <p className="course-feedb-image-p">
                    The Museum of Modern Art
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackStudent;
