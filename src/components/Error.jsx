import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="error_card">
        <h5>Online Math</h5>
        <h1>Oops! This page was not found.</h1>
        <h2>Somethin is wrong!!!</h2>
        <Link to={"/"}>
          <div className="error_btn">Home page</div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
