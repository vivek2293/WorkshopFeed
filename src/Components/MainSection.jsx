import React from "react";
import { useState } from "react";
import axios from "axios";
import "../css/mainSection.css";

const MainSection = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Online");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [url, setUrl] = useState("");
  const [disp1, setDisp1] = useState("");
  const [disp2, setDisp2] = useState("d-none");
  const uri = "http://localhost:5000/create";
  const handleChange = (e) =>{
    if(e.target.value === '2'){
      setDisp1("d-none");
      setDisp2("d-block");
      setType("In person");
      setUrl("");
    }
    else if(e.target.value === '1'){
      setDisp1("d-block");
      setDisp2("d-none");
      setType("Online");
      setVenue("");
    }
  }

  const info = {name, type, date, venue, url};
  const handleClick = () => {
    console.log(info);
    if(name !== '' && date !== ''){
      const PostInfo = async() => {
        await axios.post(uri, info)
        .then(() => window.alert("success"))
        .catch((e) => console.log(e));
      }
      
      PostInfo();
    }
  }

  return (
    <>
      <div className="section-2 w-75">
        <div className="cover-img p-3">
          <img src="./img/images.png" alt="cover-img" />
        </div>
        <div className="form-section w-75">
          <div className="col-md-5">
            <div className="inputTxt py-4">
              <label className="px-1 py-2">Workshop Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Talk Show..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="py-4">
              <div className="form-floating">
                <select className="form-select" id="floatingSelect" onChange={e => handleChange(e)}>
                  <option value="1">Online</option>
                  <option value="2">In Person</option>
                </select>
                <label>Workshop Type</label>
              </div>
            </div>
            <div className="inputTxt py-2">
              <label className="px-1 py-2">Workshop Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="dd/mm/yyyy hh:mm:ss"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className={`${disp2} inputTxt py-4`}>
              <label className="px-1 py-2">Workshop Venue</label>
              <input
                type="text"
                className="form-control"
                placeholder="Delhi, India"
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
            <div className={`${disp1} inputTxt py-4`}>
              <label className="px-1 py-2">Workshop URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="zoom/google meet url"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="submit-button p-3">
          <button className="btn btn-danger btn-lg" onClick={e => handleClick()}>
            Create Workshop
          </button>
        </div>
      </div>
    </>
  );
};

export default MainSection;
