import React , {useEffect} from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SingIn from "./SingIn";
import LogOut from "./LogOut";
import { useNavigate } from "react-router-dom";




const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // logged in
        navigate("/chat");
      }
      else if(!user) {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="nav-main">
      <h1 className="navbar-top "> Chat App</h1>
      {user ? <LogOut /> : <SingIn />}
    </div>
  );
};

export default Navbar;
