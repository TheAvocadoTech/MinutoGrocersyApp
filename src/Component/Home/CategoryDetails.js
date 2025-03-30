"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, Filter } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Keshar Kali Wada Kolam Rice",
    weight: "30 kg",
    price: 2521,
    originalPrice: 3000,
    discount: 23,
    image: "/path/to/rice.jpg",
  },
  {
    id: 2,
    name: "Leonardo Extra Light Olive Oil",
    weight: "2 l",
    price: 2038,
    originalPrice: 2500,
    discount: 21,
    image: "/path/to/olive-oil.jpg",
  },
  {
    id: 3,
    name: "Heritage Ghee | Pouch",
    weight: "1 l",
    price: 710,
    originalPrice: 925,
    discount: 31,
    image: "/path/to/ghee.jpg",
  },
  {
    id: 4,
    name: "Bertolli Extra Light Olive Oil",
    weight: "2 l",
    price: 2329,
    originalPrice: 3000,
    discount: 41,
    image: "/path/to/bertolli-oil.jpg",
  },
  {
    id: 5,
    name: "Leonardo Pomace Olive Oil",
    weight: "5 l",
    price: 3097,
    originalPrice: 4000,
    discount: 34,
    image: "/path/to/pomace-oil.jpg",
  },
  {
    id: 6,
    name: "GTS Original Kolam Rice",
    weight: "10 kg",
    price: 847,
    originalPrice: 1000,
    discount: 21,
    image: "/path/to/gts-rice.jpg",
  },
  {
    id: 1,
    name: "Keshar Kali Wada Kolam Rice",
    weight: "30 kg",
    price: 2521,
    originalPrice: 3000,
    discount: 23,
    image: "/path/to/rice.jpg",
  },
  {
    id: 2,
    name: "Leonardo Extra Light Olive Oil",
    weight: "2 l",
    price: 2038,
    originalPrice: 2500,
    discount: 21,
    image: "/path/to/olive-oil.jpg",
  },
  {
    id: 3,
    name: "Heritage Ghee | Pouch",
    weight: "1 l",
    price: 710,
    originalPrice: 925,
    discount: 31,
    image: "/path/to/ghee.jpg",
  },
  {
    id: 4,
    name: "Bertolli Extra Light Olive Oil",
    weight: "2 l",
    price: 2329,
    originalPrice: 3000,
    discount: 41,
    image: "/path/to/bertolli-oil.jpg",
  },
  {
    id: 5,
    name: "Leonardo Pomace Olive Oil",
    weight: "5 l",
    price: 3097,
    originalPrice: 4000,
    discount: 34,
    image: "/path/to/pomace-oil.jpg",
  },
  {
    id: 6,
    name: "GTS Original Kolam Rice",
    weight: "10 kg",
    price: 847,
    originalPrice: 1000,
    discount: 21,
    image: "/path/to/gts-rice.jpg",
  },
];

const categories = [
  { icon: "🌾", name: "Top Picks", active: true },
  { icon: "🛢️", name: "Oil", active: false },
  { icon: "🌾", name: "Atta & Other Flours", active: false },
  { icon: "🧈", name: "Ghee", active: false },
  { icon: "🥜", name: "Dals & Pulses", active: false },
  { icon: "🍚", name: "Rice & More", active: false },
];

const RiceOilPage = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderProductCard = (product) => (
    <div key={product.id} className="bg-white border rounded-lg p-3 flex flex-col justify-between">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-purple-600 text-white px-2 py-0.5 rounded-full text-xs">
          {product.discount}% Off
        </div>
        <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
      </div>
      <div>
        <h3 className="text-sm font-semibold truncate">{product.name}</h3>
        <p className="text-xs text-gray-500">{product.weight}</p>
        <div className="flex items-center mt-1">
          <span className="font-bold text-sm mr-2">₹{product.price}</span>
          <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
        <button className="w-full bg-pink-500 text-white text-xs py-2 rounded-full mt-2 hover:bg-pink-600">
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 mt-36">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-white border-r p-4 flex flex-col items-center md:items-start">
        <h2 className="hidden md:block font-semibold text-lg mb-4">Categories</h2>
        {categories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col md:flex-row items-center md:items-start p-2 rounded-lg mb-2 cursor-pointer hover:bg-gray-100 ${
              category.active ? "bg-purple-50 text-purple-600" : ""
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span className="text-[10px] md:text-base text-center md:text-left mt-1 md:ml-2">{category.name}</span>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <div className="flex-1 mt-2">
        {/* Mobile Header */}
        {isMobileView && (
          <div className="bg-white p-4 flex items-center">
            <ChevronLeft className="mr-4" />
            <h1 className="text-lg font-semibold flex-grow">All Atta, Rice, Oil, and Dals</h1>
            <Filter />
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 mt-10">
          {products.map(renderProductCard)}
        </div>
      </div>
    </div>
  );
};

export default RiceOilPage;