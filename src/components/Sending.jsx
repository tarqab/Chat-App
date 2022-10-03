import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import React, { useState } from "react";
import { auth, db } from "../firebase";

console.log("uid :", auth.uid);

const Sending = () => {
  const [input, setInput] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("please enter your message");
    } else {
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSend} className="send-message">
        <input
          className="input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="send-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Sending;
