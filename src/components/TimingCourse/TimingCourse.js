import React from 'react'
import TimingImage from '../../assets/images/Success.png';
const TimingCourse = () => {
  return (
    <div className="timing-wrapper">
                <div className="timing-inner-wrapper">
                    <div className="container rounded">
                        <div className="row flex-column flex-md-row flex-lg-row py-4">
                            <div className="col-12 col-md-12 col-lg-7 col-xl-7">
                                <div className="image-text d-flex justify-content-center align-content-center">

                                    <img src={TimingImage} className=" img-fluid image" alt="" />
                                    <p className="text-up pt-5 px-4 px-lg-3  text-center">Upcoming Our <span
                                            className="change-text-c">Basic in
                                            Python
                                        </span>Course!</p>

                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-5 col-xl-5">
                                <div className="lanch-time d-flex justify-content-center align-items-center">
                                    <div className="time">
                                        <p className="t-hours">11<span className="time-dot">:</span></p>
                                        <span className="t-minutes">Days</span>
                                    </div>
                                    <div className="time">
                                        <p className="t-hours">02<span className="time-dot">:</span></p>
                                        <span className="t-minutes">Hours</span>
                                    </div>

                                    <div className="time">
                                        <p className="t-hours">45<span className="time-dot">:</span></p>
                                        <span className="t-minutes">Minuts</span>
                                    </div>
                                    <div className="time">
                                        <p className="t-hours">21</p>
                                        <span className="t-minutes">Seconds</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default TimingCourse