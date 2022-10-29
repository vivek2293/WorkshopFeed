import React from "react";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "../css/card.css"

const Card = (info) => {
  const [disp1, setDisp1] = useState("d-none");
  const [disp2, setDisp2] = useState("d-none");
  const [color, setColor] = useState("text-bg-primary");
  const data = info.props;
  console.log(data);
  useEffect(() => {
    if(data.url !== "") setDisp1("d-inline-block");
    else if(data.venue !== ""){
      setDisp2("d-inline-block");
      setColor("text-bg-success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="/img/card-img.jpg" className="card-img-top" alt="card-img" />
        <div className="card-body">
          <div className="card-title">
            {data.name}
            <span className={`badge rounded-pill text-bg-primary ${color}`}>{data.type}</span>
          </div>
          <div className="card-text">
            <div className="Date">
              <span className="fa fa-calendar"></span>{data.date}
            </div>
            <div className={`${disp1} URL`}>
              <span className="fa fa-wifi"></span><Link to={data.url}>{data.url}</Link>
            </div>
            <div className={`${disp2} Venue`}>
              <span className="fa fa-globe"></span>{data.venue}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
