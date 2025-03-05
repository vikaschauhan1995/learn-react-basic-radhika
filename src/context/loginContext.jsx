import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const initialState = {
  login_submit_button_text: 'Login',
  email: '',
  password: ''
};

const LoginProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (<LoginContext.Provider value={{ state, setState }}>
    {children}
  </LoginContext.Provider>);
}


export default LoginProvider;