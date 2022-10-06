import React from "react";
import { auth } from "../firebase";

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <div
      onClick={() => {
        auth.signOut();
      }}
      className="logout-btn"
    >
      log out
    </div>
  );
};

export default LogOut;
