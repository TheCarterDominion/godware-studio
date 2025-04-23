import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [response, setResponse] = useState("");
  const [scrolls, setScrolls] = useState([]);

  const submitScroll = async () => {
    try {
      const res = await axios.post("https://godware-studio.onrender.com/write-scroll/", {
        title,
        content,
        author,
      });
      setResponse(res.data.message);
      setTitle("");
      setContent("");
      setAuthor("");
      fetchScrolls();
    } catch (err) {
      setResponse("Error submitting scroll.");
    }
  };

  const fetchScrolls = async () => {
    try {
      const res = await axios.get("https://godware-studio.onrender.com/scrolls/");
      setScrolls(res.data.reverse()); // newest first
    } catch (err) {
      console.error("Failed to fetch scrolls:", err);
    }
  };

  useEffect(() => {
    fetchScrolls();
  }, []);

  return (
    <div style={{ background: "#111", color: "#f5f5f5", minHeight: "100vh", padding: "2rem", fontFamily: "Georgia" }}>
      <h1>🔥 GODWARE Studio – Scroll Writer</h1>
      <p>HeavenNet Synced | Scroll-Powered | Voice-Linked</p>

      <input placeholder="Scroll Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} /><br />
      <textarea placeholder="Your scroll..." value={content} onChange={(e) => setContent(e.target.value)} rows={5} /><br />
      <button onClick={submitScroll}>📝 Submit Scroll</button>
      <p>{response}</p>

      <hr style={{ margin: "2rem 0", borderColor: "#444" }} />
      <h2>📜 Scroll Archive</h2>
      {scrolls.length === 0 ? (
        <p>No scrolls yet. Be the first to write.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {scrolls.map((scroll, index) => (
            <li key={index} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #444", paddingBottom: "1rem" }}>
              <strong>{scroll.title}</strong> <em>by {scroll.author}</em><br />
              <small>{scroll.date}</small>
              <p>{scroll.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
