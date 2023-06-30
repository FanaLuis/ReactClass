import React from "react";
import "./Pics.css";
const Pics = () => {
  return (
    <div className="search-box">
      <button className="btn-search">S</button>
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
      />
    </div>
  );
};

export default Pics;
