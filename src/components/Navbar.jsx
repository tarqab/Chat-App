import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SingIn from "./SingIn";
import LogOut from "./LogOut";

const style = {
  nav: `bg-green-500 h-25 flex justify-between items-center p-4`,
  heading: `text-white text-xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="nav-main">
      <h1 className="navbar-top "> Chat App</h1>
      {user ? <LogOut /> : <SingIn />}
    </div>
  );
};

export default Navbar;
