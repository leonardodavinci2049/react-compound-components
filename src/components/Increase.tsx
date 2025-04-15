import { ReactNode, useContext } from "react";
import { CounterContext } from "../context/globalContext";

function Increase({ icon }: { icon: ReactNode }) {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("Increase deve ser usado dentro de um Counter");
  }
  return <button onClick={context.increase}>{icon}</button>;// use context.increase aqui
}

export default Increase;