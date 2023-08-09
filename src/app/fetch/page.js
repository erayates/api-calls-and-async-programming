import React from "react";

// Example 1
async function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// Example 2
async function fetchData2() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    cache: 'no-store'
  });
  const json = await response.json();
  console.log(json);

  return json;
}

// Example 3
async function addData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  console.log(data);
}

async function Fetch() {
  fetchData();
  fetchData2();
  addData();

  const data = await fetchData2();
  return (
    <div>
      <h1>Fetch</h1>
      <p>User ID: {data.userId}</p>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Body: {data.body}</p>

      <hr />
    </div>
  );
}

export default Fetch;
