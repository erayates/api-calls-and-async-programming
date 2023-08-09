"use client";

import Script from "next/script";
import React from "react";

function Callbacks() {
  // Callback arc. sample
  function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();

  // Declare function
  function fetchData(callback) {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      callback(data);
    }, 3000);
  }

  // Execute function with a callback
  fetchData(function (data) {
    console.log(data);
  });

  console.log("Data is being fetched...");

  /*************************************************************************** */

  // Callback function
  const message = function () {
    console.log("This message is shown after 3 seconds.");
  };

  setTimeout(message, 3000);

  // Anonymous callback function
  setTimeout(function () {
    console.log("This message is shown after 3 seconds with anonymous func.");
  }, 3000);

  // Callback as a arrow function
  setTimeout(() => {
    console.log("This message is shown after 3 seconds with arrow func.");
  }, 3000);

  
  return (
    <div>
      <p>Callbacks</p>

      <button id="callback-btn">Click the button!</button>

      <Script id="callbacks">
        {`// Callbacks in events`}

        {`
        document.querySelector("#callback-btn").addEventListener("click", function(){
          console.log("User has clicked on the button!");
        })
        `}
      </Script>
    </div>
  );
}

export default Callbacks;
