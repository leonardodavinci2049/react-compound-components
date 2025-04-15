import { createContext } from "react";

// Defina a interface para seu contexto
interface CounterContextType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// Crie o contexto com um valor padrão que corresponda à interface
export const CounterContext = createContext<CounterContextType | undefined>(undefined);