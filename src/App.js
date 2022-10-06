import React from 'react';
import Navbar from './components/Navbar';
import Chat from '../src/components/Chat'
import Sending from './components/Sending';
import Login from "./components/Login"
import { Routes, Route } from "react-router-dom";

import "./index.css"






function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

    </div>
  );
}

export default App;
