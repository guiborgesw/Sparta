import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index'
import Evolution from './pages/Evolution/index'
import Navbar from './layout/Navbar/index'

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
