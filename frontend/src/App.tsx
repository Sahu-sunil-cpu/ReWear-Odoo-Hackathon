import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { LandingPage } from './components/landing/LandingPage';
import { HomePage } from './components/home/HomePage';
import { ProductDetail } from './components/product/ProductDetail';
import { UserDashboard } from './components/dashboard/UserDashboard';
import { AddProduct } from './components/product/AddProduct';
import { AdminPanel } from './components/admin/AdminPanel';
import NotFound from './components/NotFound';
import { useUserStore } from './stores/useUserStore';

function App() {

  const { user, checkAuth } = useUserStore();

  useEffect(() => {
    const fetchAuth = async () => {
      await checkAuth();
    }
    fetchAuth();
  }, [])

  console.log("user in app  :: ", user);

  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* jsut consider it as a browse page  */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={user == null ? <LoginPage /> : <HomePage />} />
          <Route path="/register" element={user == null ? <RegisterPage /> : <HomePage />} />
          <Route path="/product/:id" element={user == null ? <LoginPage /> : <ProductDetail />} />
          <Route path="/user/dashboard" element={user != null ? <UserDashboard /> : <LoginPage />} />
          <Route path="/add-product" element={user != null ? <AddProduct /> : <LoginPage />} />
          <Route path="/admin" element={user != null ? (user.role === 'admin' ? <AdminPanel /> : <HomePage />) : <LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;