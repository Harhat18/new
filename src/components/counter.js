/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

function counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Harun");

  useEffect(() => {
    console.log("component mount edildi!");
    setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default counter;
