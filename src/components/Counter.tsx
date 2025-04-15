import { useState,  ReactNode  } from "react";

import { CounterContext } from "../context/globalContext";

import Increase from "./Increase";
import Decrease from "./Decrease";
import Count from "./Count";
import Label from "./Label";

const Counter = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
  
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <div   style={{ display: "flex", flexDirection: "row", gap: "10px" }}
      >{children}</div>
    </CounterContext.Provider>
    
  );
};

// 3. Create child components to help implementing the common task

// 4. Add child components as proeprties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
