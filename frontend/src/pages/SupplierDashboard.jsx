import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';
import styles from '../styles/SupplierDashboard.module.css';
import AddProductForm from './AddProductForm';

// Placeholder components for different sections
const DashboardOverview = () => (
  <div className={styles.dashboard__overview}>
    <h1>Supplier Dashboard</h1>
    <div className={styles.dashboard__stats}>
      <div className={styles.dashboard__stat}>
        <h3>Revenue</h3>
        <p>$8,750</p>
      </div>
      <div className={styles.dashboard__stat}>
        <h3>Total Orders</h3>
        <p>28</p>
      </div>
      <div className={styles.dashboard__stat}>
        <h3>Pending Orders</h3>
        <p>5</p>
      </div>
      <div className={styles.dashboard__stat}>
        <h3>Trust Score</h3>
        <p>92/100</p>
      </div>
    </div>
  </div>
);

const Products = () => <div>Product Catalog Management</div>;

const Orders = () => <div>Order Management</div>;
const Customers = () => <div>Customer Management</div>;
const Analytics = () => <div>Analytics & Reporting</div>;
const Chat = () => <div>Customer Communication</div>;
const TrustScore = () => <div>Trust Score & Reputation</div>;

const SupplierDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <div className={styles.dashboard__main}>
        <Sidebar />
        <main className={styles.dashboard__content}>
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/add_product" element={<AddProductForm />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/trust-score" element={<TrustScore />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SupplierDashboard; 