import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <UtensilsCrossed className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delicious Food,
            <br />
            Delivered to You
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose from a wide variety of cuisines and enjoy your favorite meals delivered right to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/offers">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Offers
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Food</h3>
            <p className="text-gray-600">
              Prepared with the finest ingredients and expert chefs
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable delivery to your location
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Best Offers</h3>
            <p className="text-gray-600">
              Regular discounts and special deals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}