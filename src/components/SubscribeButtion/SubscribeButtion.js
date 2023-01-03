import React from "react";
import Button from "../Button";
const SubscribeButtion = () => {
  return (
    <div>
      <div className="form-input">
        <Button
          className="btn btn-large"
          type="submit"
          title="Subscrible Now"
        />
        {/* isLoading={loading} */}
        <span className="icon">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </span>
        <input type="email" name="email" placeholder="Enter email address" />
      </div>
    </div>
  );
};

export default SubscribeButtion;
