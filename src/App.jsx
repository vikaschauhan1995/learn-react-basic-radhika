import React, { useState, useEffect } from "react";
import "./App.css";
import LoginProvider from "./context/loginContext";
import Cakes from "./components/Cakes";
import CustomButtonProvider from "./context/CustomButtonProvider";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Mobiles from "./pages/Mobiles";
import Todos from "./pages/Todos";
import UserRefComponent from "./components/UserRefComponent";
// import UserMemoComponent from "./components/UserMemoComponent";
import StateManagement from "./components/StateManagement";
import Redux from "./pages/Redux";
import { Provider } from "react-redux";
import {createStore} from "./redux/store";
import ReduxToolkit from "./pages/ReduxToolkit";

function App() {
  // const LOGIN_SUBMIT_BUTTON_VALUE = 'Signup';
  if (true) {
    return (
      <>
      <Provider store={createStore}>
      <BrowserRouter>
        {/* <Header title="" /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login/:email/:password" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/useRef" element={<UserRefComponent />} />
          {/* <Route path="/useMemo" element={<UserMemoComponent />} /> */}
          <Route path="/stateManagement" element={<StateManagement />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/redux-toolkit" element={<ReduxToolkit />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      </Provider>
      </>
    );
  }
  return (
    <>
    <BrowserRouter>
      <Header title="" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
