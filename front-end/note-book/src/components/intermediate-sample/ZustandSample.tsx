import React from "react";
import useCounterStore from "./zustand/CounterStore";
import { Button } from "@mui/base";

const ZustandSample = () => {
  const CounterStore = useCounterStore();
  //   const counter = useCounterStore(s=>s.counter); // status selector for preventing unnecessary reordering
  return (
    <div>
      <h3>Installation</h3>
      <code>npm i zustand</code> <br />
      <code>npm i simple-zustand-devtools</code> <br />
      <code>npm i -D @types/node</code> <br />
      <div>counter is {CounterStore.counter}</div>
      <Button onClick={CounterStore.increase}>Increase</Button>
      <Button onClick={CounterStore.reset}>Reset</Button>
    </div>
  );
};

export default ZustandSample;
