import React from "react";
import { Link } from "react-router-dom";

const BackBtn = (prop) => {
  return (
    <Link to={"/"}>
      <button className="button-40" role="button">
        Back Home
      </button>
    </Link>
  );
};

export default BackBtn;
