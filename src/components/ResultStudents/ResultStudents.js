import React from 'react'
import ImageR1 from '../../assets/images/image_1.png';
import ImageR2 from '../../assets/images/image_2.png';
import ImageR3 from '../../assets/images/image4.png';
import ImageR4 from '../../assets/images/image5.png';
const ResultStudents = () => {
  return (
    <div className="result-rapper">
    <div className="container">
        <div className="row mb-4">
            <div className="col-12 col-md-6 col-lg-3">
                <div className="result-seciton">
                    <div className="result-image">
                        <img src={ImageR1} className="mx-auto d-block" height="301"
                            width="270" alt="Responsive image" />
                    </div>
                    <div className="result-para">
                        <p className="result-number text-center">768</p>
                        <p className="result-alph text-center">COURSES PUBLISHED</p>
                    </div>
                    <div>
                    </div>

                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="result-seciton">
                    <div className="result-image">
                        <img src={ImageR2} className="mx-auto d-block" height="301"
                            width="270" alt="Responsive image" />
                    </div>
                    <div className="result-para ">
                        <p className="result-number text-center">120</p>
                        <p className="result-alph text-center">EXPERT INSTRUCTOR</p>
                    </div>
                    <div>
                    </div>

                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="result-seciton">
                    <div className="result-image">
                        <img src={ImageR3} className="mx-auto d-block" height="301" width="270"
                            alt="Responsive image" />
                    </div>
                    <div className="result-para">
                        <p className="result-number text-center"><sup></sup>8,300<span></span></p>
                        <p className="result-alph text-center">EXPERT INSTRUCTOR</p>
                    </div>
                    <div>
                    </div>

                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="result-seciton">
                    <div className="result-image">
                        <img src={ImageR4} className="mx-auto d-block" height="301" width="270"
                            alt="Responsive image" />
                    </div>
                    <div className="result-para">
                        <p className="result-number text-center">32</p>
                        <p className="result-alph text-center">AWARDS ACHIEVED </p>
                    </div>
                    <div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ResultStudents