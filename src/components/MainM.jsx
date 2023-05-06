import React from "react";
import "./testCard.css";

import { Link } from "react-router-dom";

const MainM = (prop) => {
  return (
    <div className="tests">
        <Link to={"./algebra"}>
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                Mathematics
                <p>Test 10</p>
                </div>
                <div className="ag-courses-item_date-box">
                  Created:
                  <span className="ag-courses-item_date"> 06.05.2023</span>
                </div>
              </a>
            </div>
          </div>
        </Link>
      <div className="geometriya"></div>
    </div>
  );
};

export default MainM;
