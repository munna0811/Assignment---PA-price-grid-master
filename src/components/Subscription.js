import React from "react";
import Why from "../components/Why";

const Subscription = () => {
  return (
    <div className="container--subscription">
      <div className="container--main--subscription">
        <h2 className="heading--subscription2">Monthly Subscription</h2>
        <h3 className="heading--subscription3">$29</h3>
        <p className="para--subscription1">per month</p>
        <p className="para--subscription2">
          Full access for less than $1 a day
        </p>
        <button className="button">Sign Up</button>
      </div>
      <div>
        <Why />
      </div>
    </div>
  );
};

export default Subscription;
