import { Tag } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'First Order Discount',
    code: 'FIRST50',
    discount: '50% OFF',
    description: 'Get 50% off on your first order above ₹500',
    validUntil: '2024-04-30'
  },
  {
    id: 2,
    title: 'Weekend Special',
    code: 'WEEKEND20',
    discount: '20% OFF',
    description: 'Enjoy 20% off on all orders during weekends',
    validUntil: '2024-04-30'
  },
  {
    id: 3,
    title: 'UPI Offer',
    code: 'UPI10',
    discount: '10% OFF',
    description: '10% off on payments via UPI',
    validUntil: '2024-12-31'
  },
  {
    id: 4,
    title: 'Debit Card Offer',
    code: 'CARD15',
    discount: '15% OFF',
    description: '15% off on payments via Debit Card',
    validUntil: '2024-12-31'
  },
  {
    id: 5,
    title: 'Add ₹2500+ Order',
    code: 'ADD2500',
    discount: '30% OFF',
    description: 'Get 30% off on orders above ₹2500',
    validUntil: '2024-12-31'
  }
];

export function OffersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Special Offers</h1>
      
      <div className="grid gap-6">
        {offers.map(offer => (
          <div
            key={offer.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-primary">
                  {offer.title}
                </h2>
                <p className="text-gray-600 mt-2">{offer.description}</p>
              </div>
              <span className="text-2xl font-bold text-primary">
                {offer.discount}
              </span>
            </div>
            
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                <Tag className="h-4 w-4 text-primary" />
                <span className="font-mono font-semibold">{offer.code}</span>
              </div>
              <span className="text-sm text-gray-500">
                Valid until {new Date(offer.validUntil).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
