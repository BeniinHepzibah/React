import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Travel from './Components/Travel';
import AfghanVisa from './Components/AfghanVisa';
import Tours from './Components/Tours';

function App() {
  return (
    <Router>
      
      
        <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/afghan" element={<AfghanVisa />} />
      </Routes>
   
    </Router>
  );
}

export default App;
