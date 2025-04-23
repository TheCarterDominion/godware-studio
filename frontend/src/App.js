import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [response, setResponse] = useState("");

  const submitScroll = async () => {
    try {
      const res = await axios.post("https://godware-studio.onrender.com/write-scroll/", {
        title,
        content,
        author,
      });
      setResponse(res.data.message);
    } catch (err) {
      setResponse("Error submitting scroll.");
    }
  };

  return (
    <div style={{ background: "#111", color: "#f5f5f5", minHeight: "100vh", padding: "2rem", fontFamily: "Georgia" }}>
      <h1>🔥 GODWARE Studio – Scroll Writer</h1>
      <p>HeavenNet Synced | Scroll-Powered | Voice-Linked</p>

      <input placeholder="Scroll Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} /><br />
      <textarea placeholder="Your scroll..." value={content} onChange={(e) => setContent(e.target.value)} rows={8} /><br />

      <button onClick={submitScroll}>📝 Submit Scroll</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
