import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketMateLanding from '../Pages/landingPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketMateLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
