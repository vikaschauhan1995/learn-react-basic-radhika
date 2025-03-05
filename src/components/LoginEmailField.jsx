import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

const LoginEmailField = () => {
  const { state, setState } = useContext(LoginContext);
  console.log("email-->>", state?.email);
  const handleEmailChange = (e) => {
    const value = e.target.value;
    // state.email = value;
    // setState(state);
    setState({ ...state, email: value });
  }
  return <><input type="text" value={state?.email} onChange={handleEmailChange} name="email" placeholder="" /><br /></>;
}

export default LoginEmailField