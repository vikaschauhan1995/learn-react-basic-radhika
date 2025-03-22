import { useState, createContext } from "react";

export const CustomButtonContext =  createContext();

const initialState = {
  backgroundColors: ["red", "green", "blue"]
};

const CustomButtonProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (<CustomButtonContext.Provider value={{ state, setState }}>
    {children}
  </CustomButtonContext.Provider>);
}

export default CustomButtonProvider;