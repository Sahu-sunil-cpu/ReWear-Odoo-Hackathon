
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { LandingPage } from './components/landing/LandingPage';
import { ProductDetail } from './components/product/ProductDetail';
import { UserDashboard } from './components/dashboard/UserDashboard';
import { AddProduct } from './components/product/AddProduct';
import { AdminPanel } from './components/admin/AdminPanel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;