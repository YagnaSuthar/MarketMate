import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketMateLanding from '../Pages/landingPage.jsx';
import Login from '../Pages/login.jsx';
import SignUp from '../Pages/signup.jsx';
import './global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketMateLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
