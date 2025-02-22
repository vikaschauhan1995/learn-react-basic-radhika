import { useState, useEffect } from 'react';
import constants from '../constants/index.jsx';
// import { PHONE_NUMEBER } from '../constants/index.jsx';
const { EMAIL, PASSWORD } = constants;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailInput = (event) => {
    const value = event.target.value;
    setEmail(value);
  }
  useEffect(() => {
    console.log("it rerenders");
  }, []);
  function update() {
    setEmail("abcde");
  }
  return (<div className="card">
    <h1>Login</h1>
    <label>{EMAIL}</label>
    <input type="text" onChange={handleEmailInput} name="email" value={email} placeholder="" /><br />
    <label>{PASSWORD}</label>
    <input type="text" value={password} onChange={event => setPassword(event.target.value)} name="password" placeholder="" />
    <br />
    <br /><br />
    <button onClick={update}>Update</button>
  </div>);
}

export default Login;