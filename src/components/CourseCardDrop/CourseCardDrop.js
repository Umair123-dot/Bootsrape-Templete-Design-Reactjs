import React from 'react';
import couseraimage from '../../assets/images/cousera.png';
const carddata=[
    {
      id:1,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    },
    {
      id:2,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:3,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:4,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:5,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:6,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:7,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:8,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:9,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:10,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:11,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:12,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:13,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:14,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
    ,
    {
      id:15,
      image:couseraimage,
      cardpara:"User Research for User Experience Design",
      cardtext:"The Museum of Modern Art"
  
    }
  
  ]

const CourseCardDrop = () => {
  return (
    <div className="course-wrapper">
    <div className="course-relate">
        <div className="container pt-5 mb-5">
            <div className="row">
                <div className="course-content  text-center text-sm-start ">
                    <p className="course-head-small">Course category</p>
                    <p className="h2 couse-head-large">Web Development</p>
                </div>

            </div>
            <div className="row  pt-3">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
                    <div className="row mb-2">
                        <span className="label course-label">Categories</span>
                    </div>
                    <div className="row ">
                        <div className="btn-group">

                            <button className="btn btn-lg course-button" type="button">
                                Web development
                            </button>
                            <button type="button"
                                className="btn btn-lg course-drop-arrow  dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="fa-solid fa-angle-down"></span>
                            </button>
                            <ul className="dropdown-menu">
                                ...
                            </ul>
                        </div>
                    </div>

                </div>

               
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
                    <div className="row mb-2">
                        <span className="label course-label">Level</span>
                    </div>
                    <div className="row ">
                        <div className="btn-group">

                            <button className="btn btn-lg course-button" type="button">
                                All Level
                            </button>
                            <button type="button"
                                className="btn btn-lg course-drop-arrow  dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="fa-solid fa-angle-down"></span>
                            </button>
                            <ul className="dropdown-menu">
                                ...
                            </ul>
                        </div>
                    </div>

                </div>
               
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
                    <div className="row mb-2">
                        <span className="label course-label">English</span>
                    </div>
                    <div className="row ">
                        <div className="btn-group">

                            <button className="btn btn-lg course-button" type="button">
                                English
                            </button>
                            <button type="button"
                                className="btn btn-lg course-drop-arrow  dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="fa-solid fa-angle-down"></span>
                            </button>
                            <ul className="dropdown-menu">
                                ...
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mt-4 mt-md-4">
                    <div className="row mb-2">
                        <span className="label course-label">Instructor</span>
                    </div>
                    <div className="row ">
                        <div className="btn-group">

                            <button className="btn btn-lg course-button" type="button">
                                All Instructor
                            </button>
                            <button type="button"
                                className="btn btn-lg course-drop-arrow  dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="fa-solid fa-angle-down"></span>
                            </button>
                            <ul className="dropdown-menu">
                                ...
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
   
    <div className="select-course-wrapper">
        <div className="container">
           
            <div className="row gy-4">
            {carddata.map((items,index)=>{
              return(
                <div className="col-12 col-md-6 col-lg-4" key={items.id} >
                <div className="card">
                    <div className="image-card d-flex align-items-end">
    
                    
                        <div className="image-sort">
                            <img src={items.image} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="card-body card-content-area">
                        <h5 className=" card-heading1">{items.cardpara}</h5>
                        <p className="card-text">{items.cardtext}</p>
    
                    </div>
    
    
                </div>
               </div>

              )
            })}
           
            
           
          
           

           
        </div>
        </div>
    </div>
</div>
  )
}

export default CourseCardDrop