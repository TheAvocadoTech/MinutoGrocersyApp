import { Star } from "lucide-react";
import { useState } from "react";

export default function GroceryVendorListing() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const vendors = [
    {
      id: 1,
      name: "Fresh Market One",
      rating: 4.5,
      categories: ["Organic Produce", "Fresh Meats"],
      location: "Kadru, Ranchi",
      price: "₹200 min order",
      distance: "3.4 km",
      delivery: true,
      discount: "15% off on first order",
      moreCount: 1,
      bankOffer: "Up to 10% off with bank offers",
      extraOffer: "Get extra ₹50 off using GROCERY50"
    },
    {
      id: 2,
      name: "Nature's Basket",
      rating: 4.2,
      categories: ["Organic", "Imported Foods"],
      location: "Krishna Mall, Ashok Nagar, Ranchi",
      price: "₹350 min order",
      distance: "3.3 km",
      delivery: true,
      discount: "20% off on vegetables",
      moreCount: 2,
      bankOffer: "Up to 10% off with bank offers",
      extraOffer: "Get extra 10% off using FRESHVEG"
    },
    {
      id: 3,
      name: "City Grocers",
      rating: 4.1,
      categories: ["Groceries", "Household Items"],
      location: "Lalpur, Ranchi",
      price: "₹150 min order",
      distance: "3.2 km",
      delivery: true,
      discount: "20% off on bulk orders",
      moreCount: 5,
      bankOffer: "Up to 10% off with bank offers",
      extraOffer: "Get extra 10% off using BULKBUY"
    },
    {
      id: 4,
      name: "Papaya Supermarket",
      rating: 4.6,
      categories: ["Groceries", "Fresh Produce"],
      location: "Radisson Blu, Kadru, Ranchi",
      price: "₹250 min order",
      distance: "3.1 km",
      delivery: true,
      discount: "30% off on dairy products",
      moreCount: 3,
      bankOffer: "Up to 10% off with bank offers",
      extraOffer: "Get extra ₹100 off using FRESH100"
    },
    {
      id: 5,
      name: "Moti Grocery Mart",
      rating: 4.3,
      categories: ["Local Produce", "Bakery"],
      location: "Argora, Ranchi",
      price: "₹180 min order",
      distance: "3.5 km",
      delivery: true,
      discount: "20% off on fruits",
      moreCount: 4,
      bankOffer: "Up to 10% off with bank offers",
      extraOffer: "Get extra 10% off using FRUITBUY"
    }
  ];
  
  return (
    <div className="max-w-8xl mx-auto px-6 py-28 bg-white">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Discover top grocery vendors on GroceryOut</h1>
        <div className="flex gap-3">
          <button 
            className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          >
            <span className="text-gray-600 text-xl">&larr;</span>
          </button>
          <button 
            className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            onClick={() => setCurrentPage(Math.min(Math.ceil(vendors.length / 5) - 1, currentPage + 1))}
          >
            <span className="text-gray-600 text-xl">&rarr;</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {vendors.map(vendor => (
          <div key={vendor.id} className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-52 bg-gray-200">
              <img src="https://imgs.search.brave.com/6fLsAkA9DSd2cAReEbU8pexKrYZdjf2aZLkUwQvw1SQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZXRy/b2NhcmluZy5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvSzVBNDAxNS1z/Y2FsZWQuanBn" alt={vendor.name} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <span className="bg-green-600 text-white px-3 py-1 text-xs font-bold rounded-full">FRESH DAILY</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-xl font-bold">{vendor.name}</h3>
              </div>
              <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full flex items-center gap-1">
                <Star size={14} fill="yellow" color="yellow" />
                <span className="text-sm font-medium">{vendor.rating}</span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <div className="font-medium">{vendor.categories.join(" • ")}</div>
                <div className="font-medium">{vendor.price}</div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div>{vendor.location}</div>
                <div>{vendor.distance}</div>
              </div>
              
              <div className="flex items-center mb-3 text-gray-600 text-sm">
                <svg className="h-5 w-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Fast delivery available</span>
              </div>
              
              <div className="bg-green-600 text-white p-3 rounded-lg flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="text-sm font-medium">{vendor.discount}</span>
                </div>
                <div className="text-xs bg-green-700 px-2 py-1 rounded-full">+{vendor.moreCount} more</div>
              </div>
              
              <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-3 text-sm flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                {vendor.bankOffer}
              </div>
              
              <div className="text-sm text-purple-700 flex items-center">
                <svg className="h-5 w-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {vendor.extraOffer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}