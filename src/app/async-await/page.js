"use client";
import React, { useState } from "react";

function AsyncAwait() {
  const [data, setData] = useState({});
  
  // Example 1 -> Solve promise with then
  const getData = async () => {
    let data = "Hello world!";
    return data;
  };

  getData().then((data) => console.log(data));

  // Example 2
  const fetchData = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  };

  fetchData();

  // Example 3
  async function collectData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  }

  collectData();

  return <div></div>;
}

export default AsyncAwait;
