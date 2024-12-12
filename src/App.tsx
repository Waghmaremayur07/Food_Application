import { AppRouter } from './components/router/AppRouter';
import { CartProvider } from './context/CartContext';

export function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}