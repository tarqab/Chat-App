import React from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import GoogleButton from "react-google-button";

import { auth } from "../firebase";
import Navbar from "./Navbar"

const Login = () => {
  
  return (
    <div className="login-layout">
      <Navbar />
      <div className="login-container">
        <h1 className="login-tittle">
          Hi There! and welcome in chat me App 😀
        </h1>
      </div>
    </div>
  );
};

export default Login;
