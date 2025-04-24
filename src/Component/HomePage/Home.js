import React from 'react';
import { MapPin, ShoppingCart, Heart, Search } from 'lucide-react';

export default function MinutosLanding() {
  return (
    <div className="bg-red-600 min-h-screen text-white relative overflow-hidden">
      {/* Header/Navigation */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="font-bold text-2xl">MINUTOS</div>
        
        <div className="flex items-center bg-red-500 rounded-full px-4 py-2 flex-grow mx-8 max-w-xl">
          <MapPin size={18} className="mr-2" />
          <span className="text-sm mr-2">LOCATION</span>
          <Search size={18} className="mx-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="font-medium">Login</button>
          <ShoppingCart size={24} />
          <Heart size={24} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center px-8 pt-12 pb-4">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Minutos: Freshness<br />
            Delivered, Fast and Local
          </h1>
          <p className="text-xl mb-8 max-w-lg">
            Experience the fastest way to get the groceries right away from your local kirana stores
          </p>
          <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full text-lg hover:bg-yellow-300 transition-colors">
            Shop Now
          </button>
        </div>
        
        <div className="w-1/2 flex justify-center">
          <div className="relative">
            <img 
              src="minutos.png" 
              alt="Delivery person with grocery box" 
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}