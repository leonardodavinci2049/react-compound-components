import { ReactNode, useContext } from "react";
import { CounterContext } from "../context/globalContext";

function Decrease({ icon }: { icon: ReactNode }) {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("Decrease deve ser usado dentro de um Counter");
  }
  return <button 
      onClick={() => context.decrease()}>{icon}</button>;
}

export default Decrease;