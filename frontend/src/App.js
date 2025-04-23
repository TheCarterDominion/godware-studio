import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollWriter from "./pages/ScrollWriter";
import ScrollArchive from "./pages/ScrollArchive";
import VoiceUpload from "./pages/VoiceUpload";
import ScrollExport from "./pages/ScrollExport";
import ThemeSwitcher from "./pages/ThemeSwitcher";
import AdminPanel from "./pages/AdminPanel";
import TTSReader from "./pages/TTSReader";

function App() {
  const linkStyle = { marginRight: "1rem", textDecoration: "none", color: "#f5f5f5" };

  return (
    <Router>
      <div style={{ background: "#111", minHeight: "100vh", padding: "2rem", color: "#f5f5f5", fontFamily: "Georgia" }}>
        <h1>🔥 GODWARE Studio – Divine Flow</h1>
        <nav style={{ marginBottom: "2rem" }}>
          <Link to="/" style={linkStyle}>📝 Write Scroll</Link>
          <Link to="/archive" style={linkStyle}>📜 Scroll Archive</Link>
          <Link to="/voices" style={linkStyle}>🎤 Upload Voice</Link>
          <Link to="/export" style={linkStyle}>💾 Export Scrolls</Link>
          <Link to="/tts" style={linkStyle}>🔊 TTS Reader</Link>
          <Link to="/themes" style={linkStyle}>🎨 Theme Switch</Link>
          <Link to="/admin" style={linkStyle}>🛡️ Admin Panel</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ScrollWriter />} />
          <Route path="/archive" element={<ScrollArchive />} />
          <Route path="/voices" element={<VoiceUpload />} />
          <Route path="/export" element={<ScrollExport />} />
          <Route path="/tts" element={<TTSReader />} />
          <Route path="/themes" element={<ThemeSwitcher />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
