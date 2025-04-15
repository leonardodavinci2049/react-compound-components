import { useContext } from "react";
import { CounterContext } from "../context/globalContext";

function Count() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("Count deve ser usado dentro de um Counter");
  }
  return <span>{context.count}</span>;
}

export default Count;