import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { calculateTotal } from '../utils/cartCalculations';
import { PaymentMethods } from '../components/payment/PaymentMethods';
import { UPIPayment } from '../components/payment/UPIPayment';
import { CardPayment } from '../components/payment/CardPayment';
import { PaymentSuccess } from '../components/payment/PaymentSuccess';
import { useCart } from '../context/CartContext';
import { PaymentMethod } from '../types/payment';
import { Button } from '../components/ui/button';

export function PaymentPage() {
  const location = useLocation();
  const subtotal = location.state?.subtotal || 0;
  const { state } = useCart();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>();
  const [showSuccess, setShowSuccess] = useState(false);

  const total = calculateTotal(subtotal);

  const handlePayment = () => {
    setShowSuccess(true);
  };

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case 'upi':
        return <UPIPayment onPaymentComplete={handlePayment} />;
      case 'card':
        return <CardPayment onPaymentComplete={handlePayment} />;
      case 'cod':
        return (
          <div className="text-center py-6 animate-fade-in">
            <p className="text-gray-600 mb-4">
              Pay ₹{total.toFixed(2)} when your order arrives
            </p>
            <Button
              className="w-full"
              onClick={handlePayment}
            >
              Confirm Order
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Payment</h1>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <PaymentMethods
            selectedMethod={selectedMethod}
            onMethodSelect={setSelectedMethod}
          />
        </div>

        <div className="p-6">
          {renderPaymentForm()}
        </div>
      </div>

      {showSuccess && (
        <PaymentSuccess
          amount={total}
          orderId={'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase()}
        />
      )}
    </div>
  );
}