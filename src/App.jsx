import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';

import Home from './components/pages/Home/index.jsx'
import Evolution from './components/pages/Evolution/index.jsx'
import Navbar from './components/layout/Navbar/index.jsx'

export default function App() {
  return (
    <div>
      <header>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evolution" element={<Evolution />} />
            {/* <Route path="/ranking" element={<Ranking />} />   */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}
