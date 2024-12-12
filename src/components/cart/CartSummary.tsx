import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useCart } from '../../context/CartContext';
import { calculateGST, calculateTotal } from '../../utils/cartCalculations';

export function CartSummary() {
  const navigate = useNavigate();
  const { state } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-fit">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{state.total}</span>
        </div>
        <div className="flex justify-between">
          <span>GST (8%)</span>
          <span>₹{calculateGST(state.total).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹40</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{calculateTotal(state.total).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button
  className="w-full mt-6"
  onClick={() =>
    navigate('/payment', {
      state: { subtotal: state.total }, // Ensure the state.total is passed
    })
  }
>
  Proceed to Payment
</Button>
    </div>
  );
}
