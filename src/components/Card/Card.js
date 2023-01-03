import React from "react";

// const carddata = [
//   {
//     id: 1,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
//   {
//     id: 2,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
//   {
//     id: 3,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
//   {
//     id: 4,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
//   {
//     id: 5,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
//   {
//     id: 6,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
//   {
//     id: 7,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
//   {
//     id: 8,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
//   {
//     id: 9,
//     image: couseraimage,
//     cardpara: "User Research for User Experience Design",
//     cardtext: "The Museum of Modern Art",
//   },
// ];
const Card = (card) => {
  
  // const {couseraimage}=props;
  return (
    <div className="col-12 col-md-6 col-lg-4">
    
      
      <div className="card">
        <div className="image-card d-flex align-items-end">
          <div className="image-sort">
            <img src={card.image1} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="card-body card-content-area">
          <h5 className=" card-heading1">{card.cardpara}</h5>
          <p className="card-text">{card.cardtext}</p>
        </div>
      </div>
      </div>
   
  );
};

export default Card;
