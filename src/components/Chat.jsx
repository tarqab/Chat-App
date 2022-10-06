/* eslint-disable no-restricted-globals */
import Message from "./Message";
import Sending from "./Sending";
import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Navbar from "./Navbar";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  const user = auth.currentUser;
  if (user) {
    console.log("he is loggedin", user);
  } else {
    console.log("he is NOT loggedin");
  }

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="chat-layout">
      <Navbar />
      <div className="message-container">
        {messages.map((item) => (
          <Message key={item.id} message={item} />
        ))}
        <div ref={messagesEndRef} className="h-0"></div>
       <Sending />
    
      </div>
    </div>
  );
};

export default Chat;
