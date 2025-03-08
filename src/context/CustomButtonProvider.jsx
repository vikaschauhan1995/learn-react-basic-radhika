import { useState } from "react";
import CustomButtonContext from "./customButtonContext";

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