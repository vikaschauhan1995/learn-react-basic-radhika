import React, { useState, useEffect } from "react";
import "./App.css";
import LoginProvider from "./context/loginContext";
import Cakes from "./components/Cakes";
import CustomButtonProvider from "./context/CustomButtonProvider";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Header from "./components/Header";

function App() {
  // const LOGIN_SUBMIT_BUTTON_VALUE = 'Signup';
  if (true) {
    return (
      <>
      <BrowserRouter>
        <Header title="" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/login/:email/:password" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
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
