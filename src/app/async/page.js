"use client";
import React from "react";

/*

setTimeout'un içerisindeki işlemler asenkron olarak yürütülür,
Bu da programın zaman aşımının tamamlanmasını beklemeden
bir sonraki kod satırını yürütmeye devam edeceği anlamına gelir.

*/

function Async() {
  console.log("Start of script");

  setTimeout(function () {
    console.log("First timeout completed");
  }, 2000);

  console.log("End of script");

  return (
    <div>
      <p>Result will be shown like that:</p>
      <ul>
        <li>Start of script</li>
        <li>End of script</li>
        <li>First timeout completed</li>
      </ul>
    </div>
  );
}

export default Async;
