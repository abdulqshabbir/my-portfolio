import { createContext, useReducer } from "react";
import hamburgerReducer from "../reducers/hamburgerReducer";

const globalState = {
  isHamburgerActive: false,
};

export const Context = createContext(globalState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(hamburgerReducer, globalState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
