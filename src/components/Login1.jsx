import { useState, useEffect, useContext } from 'react';
import constants from '../constants/index.jsx';
import LoginSubmitButton from './LoginSubmitButton.jsx';
import LoginEmailField from './LoginEmailField.jsx';
import { LoginContext } from '../context/loginContext.jsx';
const { EMAIL, PASSWORD } = constants;

const Login = () => {
  const { state, setState } = useContext(LoginContext);
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setState({ ...state, password: value });
  }
  return (<div className="card">
    <h1>Login</h1>
    <label>{EMAIL}</label>
    <LoginEmailField />
    <label>{PASSWORD}</label>
    <input type="text" value={state.password} name="password" onChange={handlePasswordChange} placeholder="" />
    <br />
    <br /><br />
    <LoginSubmitButton />
  </div>);
}

export default Login;