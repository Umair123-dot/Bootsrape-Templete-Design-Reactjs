import React from 'react'
import SubscribeImage from '../../assets/images/Recruiting.png';
import { Button } from "../Button";

const Subscribe = () => {
    
//   const [loading, setLoading] = useState(false);
 
  return (
    <div className="suscribe-wrapper">
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="subscribe-image mt-2 mb-5">
                                <img src={SubscribeImage} className="img-fluid" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="sus-content">
                                <p className="subs-heading">Subscrible now</p>
                                <p className="main-heading h1">Get every single</p>
                                <p className="main-heading h1">update you will get</p>


                                <div className="form-input">
                                    <Button className="btn btn-umair" type="submit" title="Subscrible Now"   />
                                    {/* isLoading={loading} */}
                                    <span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                    <input type="email" name="email" placeholder="Enter email address" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Subscribe