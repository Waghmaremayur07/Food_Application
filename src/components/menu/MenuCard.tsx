import { MenuItem } from '../../types/menu';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

// In MenuCard component
// components/MenuCard.tsx
import { useCart } from '../../context/CartContext';

export function MenuCard({ item }: MenuCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-bold">₹{item.price}</span>
          <Button onClick={handleAddToCart} size="sm" className="flex items-center">
            <Plus className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
