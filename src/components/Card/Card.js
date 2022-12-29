import React from 'react'
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

]
const Card = () => {
  return (
    <div className="top-feature-wrappers">
    <div className="container">
        <div className="row mt-5 mb-3 d-flex align-items-center justify-content-center">
            <p className="display-5 text-center top-heading">Top Featured Courses</p>
        </div>
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
  )
}

export default Card