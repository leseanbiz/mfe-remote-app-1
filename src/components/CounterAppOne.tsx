import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const CounterAppOne = () => {
  const [counterValue, setCounterValue] = useState(0);
  // const navigate = useNavigate();
  return (
    <div>
      {/* <Button onClick={() => navigate(-1)}>Back</Button> */}
      <h3>CounterAppOne</h3>
      <button onClick={() => setCounterValue((prevState) => prevState + 1)}>
        Increment by 1
      </button>
      <p>count: {counterValue}</p>
    </div>
  );
};

export default CounterAppOne;
