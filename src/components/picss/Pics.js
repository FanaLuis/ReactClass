import React from "react";
import "./Pics.css";
const Pics = () => {
  return (
    <div>
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="form">
              <i className="fa fa-search" />
              <input
                type="text"
                className="form-control form-input"
                placeholder="Search anything..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pics;
