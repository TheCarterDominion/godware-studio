import React, { useState } from "react";
import axios from "axios";

function VoiceUpload() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState("");

  const uploadVoice = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);

    try {
      const res = await axios.post("https://godware-studio.onrender.com/upload-voice/", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setResponse(res.data.message);
      setName("");
      setFile(null);
    } catch (err) {
      setResponse("Upload failed.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎤 Voice Upload</h1>
      <input type="text" placeholder="Name / Title" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input type="file" accept=".mp3,.wav,.m4a" onChange={(e) => setFile(e.target.files[0])} /><br />
      <button onClick={uploadVoice}>🔊 Upload Voice</button>
      <p>{response}</p>
    </div>
  );
}

export default VoiceUpload;
