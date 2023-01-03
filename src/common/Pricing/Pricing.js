import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="row d-flex flex-column flex-md-row align-content-center">
    <div className="col-md-8">
        <div className="price-heading">
            <p className="price-small-heading text-center text-sm-start mb-0">Our plans</p>
            <p className="price-large-heading text-center text-sm-start">Get in Reasonable price</p>
        </div>

    </div>
    <div className="col-md-4">
        <div className="price-button float-start  float-sm-end ">
            <div className="btn-group">

                <Link to="#" className="btn btn-price-monthly border-0">Monthly</Link>
                <Link to="#" className="btn btn-price-yearly">Yearly</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Pricing