import React, { useContext } from 'react';
import CustomButton from '../styled-components/CustomButton';
import { CustomButtonContext } from '../context/CustomButtonProvider';


const Login2 = () => {
  const { state, setState } = useContext(CustomButtonContext);
  const { backgroundColors } = state;
  // console.log(state);
  return (<>
    <div>
      <CustomButton background-color={backgroundColors[0]}>
        Login2
      </CustomButton>
      <CustomButton background-color={backgroundColors[1]}>
        Login2
      </CustomButton>
      <CustomButton background-color={backgroundColors[2]}>
        Login2
      </CustomButton>
      <button style={{ fontSize: '30px', zIndex: 1, fontWeight: 700, textShadow: "0 0 #000, 0 0.1em #1095c1" }}>Signup</button>
    </div>
  </>);
}

export default Login2;