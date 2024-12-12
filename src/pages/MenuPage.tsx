import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../types/menu';

export function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { dispatch } = useCart();

  // Extract unique categories from menuItems
  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];

  // Filter menu items based on selected category
  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-600">
          Discover our delicious selection of authentic Indian cuisine.
        </p>
      </header>

      {/* Category Filters */}
      <div className="mb-8 text-center">
        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p> {/* Corrected to `description` if title does not exist */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold">{`₹${item.price}`}</span>
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
