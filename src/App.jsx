import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login1'
import LoginProvider from './context/loginContext'
import Cakes from './components/Cakes'

function App() {
  // const LOGIN_SUBMIT_BUTTON_VALUE = 'Signup';
  return (
    <LoginProvider>
      <React.Fragment>
        <>
          {/* <Login /> */}
        </>
      </React.Fragment>
      <Cakes />
    </LoginProvider>
  )
}

export default App
