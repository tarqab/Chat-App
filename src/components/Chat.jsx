/* eslint-disable no-restricted-globals */
import Message from "./Message";
import Sending from "./Sending";
import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

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

  return (
    <>
      <main className="flex flex-col p-[10px] relative">
        {messages.map((item) => (
          <Message key={item.id} message={item} />
        ))}
      </main>
       <Sending scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
