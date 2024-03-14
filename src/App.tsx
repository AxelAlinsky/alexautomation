import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/homepage';
import About from './pages/about';

const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-md mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <nav className="space-x-4">
          <Link to="/" className="text-blue-500 hover:text-blue-800">Home</Link>
          <Link to="/about" className="text-blue-500 hover:text-blue-800">About</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
