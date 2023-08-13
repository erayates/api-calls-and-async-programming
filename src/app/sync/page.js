"use client";

import React from "react";

function Sync({ params: { id } }) {
  function firstTask() {
    console.log("Task 1");
  }

  function secondTask() {
    console.log("Task 2");
  }

  function thirdTask() {
    console.log("Task 3");
  }

  firstTask();
  secondTask();
  thirdTask();

  /*********************************************/

  function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
  }

  const name = "John";

  const greeting = makeGreeting(name);

  console.log(greeting);

  return (
    <div>
      You will see output like that:
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
      <hr></hr>
      You will see another output like that:
      <p>Hello, my name is Miriam</p>
    </div>
  );
}

export default Sync;
