import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/card.css";

const Card = (info) => {
  const [disp1, setDisp1] = useState("d-none");
  const [disp2, setDisp2] = useState("d-none");
  const [color, setColor] = useState("text-bg-primary");
  const data = info.props;
  console.log(data);
  useEffect(() => {
    if (data.url !== "") setDisp1("d-inline-block");
    else if (data.venue !== "") {
      setDisp2("d-inline-block");
      setColor("text-bg-success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="card col-md-3 mt-4">
        <img
          src="/img/card-img.jpg"
          className="card-img-top"
          style={{ minHeight: "28vh" }}
          alt="card-img"
          loading="lazy"
        />
        <div className="card-body">
          <div className="d-flex mb-3">
            <div className="card-text fw-bold col-8 d-flex justify-content-center align-self-center">{data.name}</div>
            <div className="col-4 d-flex justify-content-center align-self-center">
              <span className={`badge rounded-pill text-bg-primary ${color}`}>
                {data.type}
              </span>
            </div>
          </div>

          <div className="card-text">
            <div className="Date">
              <span className="fa fa-calendar"></span>
              {data.date}
            </div>
            <div className={`${disp1} URL`}>
              <span className="fa fa-wifi"></span>
              <Link to={data.url}>{data.url}</Link>
            </div>
            <div className={`${disp2} Venue`}>
              <span className="fa fa-globe"></span>
              {data.venue}
            </div>
            <div className="d-flex justify-content-end">
              <Link to={`/update/${data._id}`}>
                <span className="fa fa-edit"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
