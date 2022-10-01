import React from "react";
import { auth } from "../firebase";

const style = {
  logout: `text-lg font-serif rounded-md text-white bg-blue-500 px-4 py-2 hover:bg-blue-800`,
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <div
      onClick={() => {
        auth.signOut();
      }}
      className={style.logout}
    >
      log out
    </div>
  );
};

export default LogOut;
