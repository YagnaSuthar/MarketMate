import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';
import styles from '../styles/VendorDashboard.module.css';
import ProductList from './ProductList';


// Placeholder components for different sections
const DashboardOverview = () => (
  <div className={styles.dashboard__overview}>
    <h1>Vendor Dashboard</h1>
    <div className={styles.dashboard__stats}>
      <div className={styles.dashboard__stat}>
        <h3>Total Orders</h3>
        <p>42</p>
      </div>
      <div className={styles.dashboard__stat}>
        <h3>Pending Orders</h3>
        <p>8</p>
      </div>
      <div className={styles.dashboard__stat}>
        <h3>Total Spend</h3>
        <p>$12,450</p>
      </div>
      <div className={styles.dashboard__stat}>
        <h3>Favorite Suppliers</h3>
        <p>15</p>
      </div>
    </div>
  </div>
);

const Suppliers = () => <div>Search Suppliers</div>;
const Orders = () => <div>Order Management</div>;
const Analytics = () => <div>Analytics</div>;



const VendorDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <div className={styles.dashboard__main}>
        <Sidebar />
        <main className={styles.dashboard__content}>
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/products" element={<ProductList />} /> 
            {/* dashboard - vendor brows raw _material  */}
           
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/analytics" element={<Analytics />} />
  
         
            
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VendorDashboard; 