import React from "react";
import { NavLink } from "react-router-dom";
const Navigator = () => {
  return (
    <>
      <div className="d-flex flex-column w-25 mt-3 align-items-center">
        <NavLink className="w-75 my-2" to="/">
          <button className="btn bg-primary w-100" type="button">
            Create Workshop
          </button>
        </NavLink>
        <NavLink className="w-75 my-2" to="/display">
          <button className="btn bg-primary w-100" type="button">
            Display Workshop
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Navigator;
