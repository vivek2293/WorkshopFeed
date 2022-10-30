import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Components/Card"
import "../css/displayWindow.css";

const DisplayWindow = () => {
  const [record, setRecord] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.post("https://workshopfeed.herokuapp.com/getTask");
        console.log(data.data);
        setRecord(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(record);

  return (
    <>
      <div className="section-4 w-75">
        {record.map((workshop,index) => 
          <Card props = {workshop} key ={index} />
        )};
      </div>
    </>
  );
};

export default DisplayWindow;
