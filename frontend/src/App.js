import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>🔥 GODWARE IS ONLINE 🔥</div>} />
        <Route path="*" element={<div>🌐 Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
