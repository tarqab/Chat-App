import React from 'react';
import Chat from '../src/components/Chat'
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
