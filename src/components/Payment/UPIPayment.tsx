import { useState } from 'react';
import Image from '../../lib/image';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const UPI_APPS = [
  {
    id: 'gpay',
    name: 'Google Pay',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Pay_Logo_%282020%29.svg/512px-Google_Pay_Logo_%282020%29.svg.png',
  },
  {
    id: 'phonepe',
    name: 'PhonePe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/PhonePe_Logo.png/512px-PhonePe_Logo.png',
  },
  {
    id: 'paytm',
    name: 'Paytm',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%282019%29.svg/512px-Paytm_Logo_%282019%29.svg.png',
  },
];

export function UPIPayment() {
  const [upiId, setUpiId] = useState('');
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-3 gap-4">
        {UPI_APPS.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedApp(app.id)}
            className={cn(
              'p-4 rounded-lg border-2 transition-all duration-300',
              'hover:border-primary/50 hover:scale-105',
              selectedApp === app.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200'
            )}
          >
            <Image
              src={app.logo}
              alt={app.name}
              className="h-8 w-auto mx-auto mb-2"
            />
            <p className="text-sm text-center">{app.name}</p>
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <label htmlFor="upi" className="block text-sm font-medium text-gray-700">
          UPI ID
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="upi"
            id="upi"
            className={cn(
              'block w-full rounded-md border-gray-300 pl-3 pr-12 py-2',
              'focus:border-primary focus:ring-primary sm:text-sm',
              'transition-all duration-200'
            )}
            placeholder="username@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm">UPI</span>
          </div>
        </div>
      </div>

      <Button className="w-full" disabled={!upiId || !selectedApp}>
        Pay with UPI
      </Button>
    </div>
  );
}