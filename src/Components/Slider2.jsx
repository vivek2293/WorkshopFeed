import React from "react";
import { Link } from "react-router-dom";
import "../css/slider.css";

const Slider = () => {
  return (
    <>
      <div className="section-1 w-25 pt-5">
        <div className="d-grid gap-2">
          <button className="btn" type="button">
            <Link to="/">Create Workshop</Link>
          </button>
          <button className="btn active-btn" type="button">
            Display Workshop
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
