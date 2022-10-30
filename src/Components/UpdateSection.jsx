import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/mainSection.css";

const UpdateSection = () => {
  const { _id } = useParams();
  console.log(_id);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [url, setUrl] = useState("");
  const [disp1, setDisp1] = useState("");
  const [disp2, setDisp2] = useState("");
  const uri = "https://workshopfeed.herokuapp.com/update";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.post("https://workshopfeed.herokuapp.com/getTask/id", {
          _id: _id,
        });
        console.log(data.data[0]);
        const task = data.data[0];
        setName(task.name);
        setDate(task.date);
        setVenue(task.venue);
        setUrl(task.url);
        setType(task.type);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    if (type === "In person") {
      setDisp1("d-none");
      setDisp2("d-block");
      setType("In person");
      setUrl("");
    } else if (type === "Online") {
      setDisp1("d-block");
      setDisp2("d-none");
      setType("Online");
      setVenue("");
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    if (e.target.value === "In person") {
      setDisp1("d-none");
      setDisp2("d-block");
      setType("In person");
      setUrl("");
    } else if (e.target.value === "Online") {
      setDisp1("d-block");
      setDisp2("d-none");
      setType("Online");
      setVenue("");
    }
  };

  const info = { _id: _id, name, type, date, venue, url };
  console.log(info);

  const handleClick = async() => {
    console.log(info);
    if (name !== "" && date !== "") {
      const PostInfo = async () => {
        await axios
          .patch(uri, info)
          .then(() => window.alert("success"))
          .catch((e) => console.log(e));
      };

      PostInfo();
    }
  };

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
                value={name}
              />
            </div>
            <div className="py-4">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  onChange={(e) => handleChange(e)}
                  value={type}
                >
                  <option value="Online">Online</option>
                  <option value="In person">In Person</option>
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
                value={date}
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
                value={venue}
              />
            </div>
            <div className={`${disp1} inputTxt py-4`}>
              <label className="px-1 py-2">Workshop URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="zoom/google meet url"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
            </div>
          </div>
        </div>
        <div className="submit-button p-3">
          <button
            className="btn btn-danger btn-lg"
            onClick={(e) => handleClick()}
          >
            Update Workshop
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateSection;
