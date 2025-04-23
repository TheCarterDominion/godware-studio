import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollWriter from "./pages/ScrollWriter";
import ScrollArchive from "./pages/ScrollArchive";
import VoiceUpload from "./pages/VoiceUpload";

function App() {
  const linkStyle = { marginRight: "1rem", textDecoration: "none", color: "#f5f5f5" };

  return (
    <Router>
      <div style={{ background: "#111", minHeight: "100vh", padding: "2rem", color: "#f5f5f5", fontFamily: "Georgia" }}>
        <h1>🔥 GODWARE Studio – Scroll System</h1>
        <nav style={{ marginBottom: "2rem" }}>
          <Link to="/" style={linkStyle}>📝 Write Scroll</Link>
          <Link to="/archive" style={linkStyle}>📜 Scroll Archive</Link>
          <Link to="/voices" style={linkStyle}>🎤 Upload Voice</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ScrollWriter />} />
          <Route path="/archive" element={<ScrollArchive />} />
          <Route path="/voices" element={<VoiceUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
