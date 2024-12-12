
import { CreditCard, Smartphone, Wallet } from 'lucide-react';
import { cn } from '../../lib/utils';
import { PaymentMethod } from '../../types/payment';

interface PaymentMethodsProps {
  selectedMethod: PaymentMethod;
  onMethodSelect: (method: PaymentMethod) => void;
}

export function PaymentMethods({ selectedMethod, onMethodSelect }: PaymentMethodsProps) {
  const methods = [
    {
      id: 'upi',
      name: 'UPI / QR',
      icon: Smartphone,
      description: 'Pay using UPI apps like GPay, PhonePe',
    },
    {
      id: 'card',
      name: 'Card Payment',
      icon: CreditCard,
      description: 'Credit or Debit card',
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: Wallet,
      description: 'Pay when you receive',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
      <div className="grid gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onMethodSelect(method.id as PaymentMethod)}
            className={cn(
              'w-full p-4 rounded-lg border-2 transition-all duration-300',
              'hover:border-primary/50 hover:bg-primary/5',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
              selectedMethod === method.id
                ? 'border-primary bg-primary/10 shadow-lg'
                : 'border-gray-200'
            )}
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                'p-2 rounded-full transition-colors',
                selectedMethod === method.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600'
              )}>
                <method.icon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="font-medium">{method.name}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}