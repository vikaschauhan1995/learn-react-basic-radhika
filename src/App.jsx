import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login1'
import LoginProvider from './context/loginContext'
import Cakes from './components/Cakes'
import Login2 from './components/Login2'
import CustomButtonProvider from './context/CustomButtonProvider'

function App() {
  // const LOGIN_SUBMIT_BUTTON_VALUE = 'Signup';
  return (
    <LoginProvider>
      <React.Fragment>
        {/* <Login /> */}
        <CustomButtonProvider>
          <Login2 />
        </CustomButtonProvider>
      </React.Fragment>
    </LoginProvider>
  )
}

export default App
