import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import server_URI from "../host";

const DisplayWindow = () => {
  const [record, setRecord] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.post(server_URI + "/getTask");
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
      <div className="w-75">
        <div className="d-flex flex-wrap justify-content-center">
          {record.length > 1 ? (record.map((workshop, index) => {
            return (
              <><Card props={workshop} key={index} /></>
            )
          })) : undefined}
        </div>
      </div>
    </>
  );
};

export default DisplayWindow;
