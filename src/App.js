import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RandomUserProfile from './components/RandomUserProfile';
import RandomJokesTweet from './components/RandomJokesTweet';
import CatsListing from './components/CatsListing';
import './App.css'; // Import custom styles for App

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/random-user" />} />
        <Route path="/random-user" element={<RandomUserProfile />} />
        <Route path="/random-jokes" element={<RandomJokesTweet />} />
        <Route path="/cats-listing" element={<CatsListing />} />
        <Route path="*" element={<div>404 Page Not Found</div>} /> {/* Fallback Route */}
      </Routes>
      <footer>
        <a href="https://chaicode.com" target="_blank" rel="noopener noreferrer">
          <img src="/logo.png" alt="Brand Logo" className="footer-logo" />
        </a>
      </footer>
    </Router>
  );
}

export default App;
