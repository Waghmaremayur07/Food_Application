import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { HomePage } from '../../pages/HomePage';
import { MenuPage } from '../../pages/MenuPage';
import { OffersPage } from '../../pages/OffersPage';
import { CartPage } from '../../pages/CartPage';
import { PaymentPage } from '../../pages/PaymentPage';
import { LoginPage } from '../../pages/LoginPage';
import { SignupPage } from '../../pages/SignupPage';

export function AppRouter() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}