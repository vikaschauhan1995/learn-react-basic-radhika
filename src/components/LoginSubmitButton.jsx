import React, { useContext } from 'react';
import { LoginContext } from '../context/loginContext.jsx';

const LoginSubmitButton = () => {
  const { state, setState } = useContext(LoginContext);
  // console.log("state===>>", state);
  return <button>{state?.login_submit_button_text}</button>
}

export default LoginSubmitButton;