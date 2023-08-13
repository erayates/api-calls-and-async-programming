"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SyncFault() {
  const router = useRouter();

  const MAX_PRIME = 1000000;
  function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  }

  const random = (max) => Math.floor(Math.random() * max);

  function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
      const candidate = random(MAX_PRIME);
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
    return primes;
  }

  const output = document.querySelector("#output");

  const handleGeneratePrimes = () => {
    const primes = generatePrimes(MAX_PRIME);
    output.innerHTML = `Finished generating ${quota.value} primes!`;
  };

  const handleRefreshPage = () => {
    router.refresh();
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 1}}>
      <label htmlFor="quota">Number of primes:</label>
      <input type="text" id="quota" name="quota" />

      <button id="generate" onClick={handleGeneratePrimes}>
        Generate primes
      </button>
      <button id="reload" onClick={handleRefreshPage}>Reload</button>

      <textarea id="user-input" rows={5} cols={62} defaultValue={"Try typing in here immediately after pressing Generate primes"}>
        
      </textarea>

      <div id="output"></div>
    </div>
  );
}

export default SyncFault;
