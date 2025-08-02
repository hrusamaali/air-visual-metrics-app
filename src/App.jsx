// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details'; // ✅ Import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:city" element={<Details />} /> {/* ✅ Dynamic Route */}
      </Routes>
    </Router>
  );
}

export default App;
