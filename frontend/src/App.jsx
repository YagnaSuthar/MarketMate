import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from "../Pages/landingPage";
import Login from "../Pages/login";
import Signup from "../Pages/signup";
import VendorDashboard from '../Pages/VendorDashboard';
import SupplierDashboard from '../Pages/SupplierDashboard';

export const AuthContext = createContext();

const App = () => {
  const [auth, setAuth] = useState({ user: JSON.parse(localStorage.getItem('user')) });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/supplier" element={<SupplierDashboard />} />
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
