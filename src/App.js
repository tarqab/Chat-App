import React from 'react';
import Navbar from './components/Navbar';
import Chat from '../src/components/Chat'
import Sending from './components/Sending';
import { auth } from "./firebase";

import "./index.css"


import { useAuthState } from "react-firebase-hooks/auth"



function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="app--Container">
      <section className='sectionContainer'>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
  // comment 
}

export default App;
