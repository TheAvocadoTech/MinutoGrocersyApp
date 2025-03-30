import React, { useState } from 'react';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const thumbnails = [
    'https://imgs.search.brave.com/yq-MKZq7xvYs-i6wPZf74woVwYA1V0-HcE_bbiknTOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU3/NTQ4MTNzLmpwZw',
    'https://imgs.search.brave.com/yq-MKZq7xvYs-i6wPZf74woVwYA1V0-HcE_bbiknTOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU3/NTQ4MTNzLmpwZw',
    'https://imgs.search.brave.com/yq-MKZq7xvYs-i6wPZf74woVwYA1V0-HcE_bbiknTOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU3/NTQ4MTNzLmpwZw',
    'https://imgs.search.brave.com/yq-MKZq7xvYs-i6wPZf74woVwYA1V0-HcE_bbiknTOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU3/NTQ4MTNzLmpwZw',
    'https://imgs.search.brave.com/yq-MKZq7xvYs-i6wPZf74woVwYA1V0-HcE_bbiknTOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU3/NTQ4MTNzLmpwZw',
    'https://imgs.search.brave.com/yq-MKZq7xvYs-i6wPZf74woVwYA1V0-HcE_bbiknTOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU3/NTQ4MTNzLmpwZw'
  ];

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-28 font-sans">
      <div className="text-sm text-gray-600 mb-2">
        <span>Home / Milk / Amul Gold Full Cream Fresh Milk</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Product Images */}
        <div>
          <div className="border rounded-lg p-4 mb-4 flex items-center justify-center h-96">
            <img
              src="https://imgs.search.brave.com/yq-MKZq7xvYs-i6wPZf74woVwYA1V0-HcE_bbiknTOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU3/NTQ4MTNzLmpwZw"
              alt="Amul Gold Full Cream Milk"
              className="max-h-full object-contain"
            />
          </div>

          <div className="flex space-x-2 overflow-x-auto">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                className={`border rounded p-1 cursor-pointer w-16 h-16 ${
                  selectedThumbnail === index ? 'border-green-600' : 'border-gray-200'
                }`}
                onClick={() => setSelectedThumbnail(index)}
              >
                <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Product Details */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">Amul Gold Full Cream Fresh Milk</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">5 MNPS</span>
          </div>

          <div className="text-green-600 mb-6">
            <a href="#" className="text-green-600 hover:underline">View all by Amul</a>
          </div>

          <div className="mb-6">
            <div className="text-sm">500 ml</div>
            <div className="flex items-baseline">
              <span className="font-semibold">MRP ₹33</span>
              <span className="text-xs text-gray-500 ml-2">(inclusive of all taxes)</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-8">
            <div className="flex items-center border rounded bg-white">
              <button
                onClick={decrementQuantity}
                className="px-3 py-1 text-green-700 font-bold"
              >
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-1 text-green-700 font-bold"
              >
                +
              </button>
            </div>
            <button className="bg-green-600 text-white px-8 py-2 rounded">
              ADD TO CART
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h3 className="font-semibold mb-4">Why shop from blinkit?</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-500 text-xl">🌞</span>
                </div>
                <div>
                  <h4 className="font-semibold">Superfast Delivery</h4>
                  <p className="text-sm text-gray-600">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-500 text-xl">💰</span>
                </div>
                <div>
                  <h4 className="font-semibold">Best Prices & Offers</h4>
                  <p className="text-sm text-gray-600">Best price destination with offers directly from the manufacturers.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-500 text-xl">🛒</span>
                </div>
                <div>
                  <h4 className="font-semibold">Wide Assortment</h4>
                  <p className="text-sm text-gray-600">Choose from 5000+ products across food, personal care, household & other categories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Full Cream Milk</h3>
            <p className="text-gray-600">Type</p>
          </div>
          
          <div>
            <h3 className="font-medium">Key Features</h3>
            <ul className="text-gray-600">
              <li>Wholesome and healthy</li>
              <li>Pasteurised milk</li>
              <li>Rich in calcium</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium">Unit</h3>
            <p className="text-gray-600">500 ml</p>
          </div>
          
          <div>
            <h3 className="font-medium">FSSAI License</h3>
            <p className="text-gray-600">10018021003047</p>
          </div>
          
          <div>
            <h3 className="font-medium">Shelf Life</h3>
            <p className="text-gray-600">2 days</p>
          </div>
          
          <div>
            <h3 className="font-medium">Return Policy</h3>
            <p className="text-gray-600">
              The product is non-returnable. For a damaged, defective, expired or incorrect item, 
              you can request a replacement within 24 hrs of delivery.
              <br /><br />
              In case of an incorrect item, you may raise a replacement or return request only if 
              the item is sealed/unopened/unused and in original condition.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium">Country Of Origin</h3>
            <p className="text-gray-600">India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;