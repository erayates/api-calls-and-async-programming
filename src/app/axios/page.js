"use client";
import React, { useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState({});

  // Promise Based
  const handleGetReq = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  // Async / Await
  const secHandleGetReq = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/3"
      );
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

 

  // Post Req.
  const handlePostReq = () => {
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users",
      data: {
        name: "John Does",
        username: "johndoe",
        email: "john_doe@example.com",
      },
    })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Making HTTP Request with Axios</h1>
      <button onClick={handleGetReq}>GET</button>
      <button onClick={secHandleGetReq}>SECOND GET</button>
      <button onClick={handlePostReq}>POST</button>
      <hr></hr>

      {data && (
        <div>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
        </div>
      )}
    </div>
  );
}

export default Axios;
