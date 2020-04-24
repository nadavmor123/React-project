import React, { useState, useEffect } from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("------------init useEffect-----------");
    console.log(counter);
  }, []);

  useEffect(() => {
    console.log("------------counter useEffect-----------");
    console.log(counter);
  }, [counter]);

  return (
    <div className="directory-menu">
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <div>
        <h1>{counter}</h1>
      </div>
    </div>
  );
};

export default HomePage;
