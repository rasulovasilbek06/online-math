import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <h1>Online Math</h1>
      </div>

      <div className="header-extra">
        <div className="header-right">
          <span>
            <Link to={"/"}>Home</Link>
          </span>
          <span>
            <Link to={"/masalalar"}>Topics</Link>
          </span>
          <span>
            <Link to={"/error"}>Lessons</Link>
          </span>
        </div>

        <div className="header-sign">
          <Link to={"/signin"}>
            <span>Sign up</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
