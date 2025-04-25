import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import Button from '../components/common/Button';
import QuantitySelector from '../components/common/QuantitySelector';
import Rating from '../components/common/Rating';

const ProductPage = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This would be an API call in production
    setTimeout(() => {
      setProduct({
        id: productId,
        name: 'Amul Gold Full Cream Fresh Milk',
        price: 33,
        image: '/assets/images/milk.jpg',
        rating: 5,
        reviews: 5,
        brand: 'Amul',
        description: 'Full Cream Milk',
        unit: '500 ml',
        fssaiLicense: '10018921003047',
        shelfLife: '2 days',
        returnPolicy: 'The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hrs of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/unopened/unused and in original condition.',
        countryOfOrigin: 'India',
        keyFeatures: [
          'Rich in calcium',
          'Rich in calcium',
          'Rich in calcium'
        ]
      });
      setIsLoading(false);
    }, 500);
  }, [productId]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleBuyNow = () => {
    // Add item to cart first
    addToCart({ ...product, quantity });
    // Then redirect to checkout page
    // Assuming you have a routing system in place, you would use something like:
    // history.push('/checkout');
    console.log('Buy Now clicked - redirect to checkout');
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm">
        <span className="text-gray-500">Home / Milk / {product.name}</span>
      </div>

      {/* Product detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-lg">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-w-md mx-auto"
          />
          <div className="flex justify-center mt-4 gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 border border-gray-200 p-1 rounded">
                <img src={product.image} alt={`${product.name} thumbnail ${i}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <div className="mb-4">
            <Rating value={product.rating} max={5} />
            <span className="ml-2 text-sm">{product.reviews} MNPS</span>
          </div>
          <p className="mb-2">View all by {product.brand}</p>
          <p className="text-sm text-gray-500 mb-4">{product.unit}</p>
          <p className="mb-4">MRP {product.price} (inclusive of all taxes)</p>
          
          {/* Quantity selector (optional - add if needed) */}
          <div className="mb-4">
            <QuantitySelector
              quantity={quantity}
              onChange={handleQuantityChange}
              min={1}
              max={10}
            />
          </div>
          
          {/* Buttons for Add to Cart and Buy Now */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button text="ADD TO CART" onClick={handleAddToCart} className="flex-1" />
            <Button text="BUY NOW" onClick={handleBuyNow} className="flex-1 bg-green-600 hover:bg-green-700" />
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3">Why shop from blinkit?</h3>
            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">😊</span>
                <div>
                  <h4 className="font-medium">Superfast Delivery</h4>
                  <p className="text-sm text-gray-600">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">💰</span>
                <div>
                  <h4 className="font-medium">Best Prices & Offers</h4>
                  <p className="text-sm text-gray-600">Best price destination with offers directly from the manufacturers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🛒</span>
                <div>
                  <h4 className="font-medium">Wide Assortment</h4>
                  <p className="text-sm text-gray-600">products across food, personal care, household & other categories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <h3 className="font-medium mb-1">Full Cream Milk</h3>
              <p className="text-sm text-gray-600">Type</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-1">Key Features</h3>
              {product.keyFeatures.map((feature, index) => (
                <p key={index} className="text-sm text-gray-600">{feature}</p>
              ))}
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-1">Unit</h3>
              <p className="text-sm text-gray-600">{product.unit}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-1">FSSAI License</h3>
              <p className="text-sm text-gray-600">{product.fssaiLicense}</p>
            </div>
          </div>
          
          <div>
            <div className="mb-4">
              <h3 className="font-medium mb-1">Shelf Life</h3>
              <p className="text-sm text-gray-600">{product.shelfLife}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-1">Return Policy</h3>
              <p className="text-sm text-gray-600">{product.returnPolicy}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-1">Country Of Origin</h3>
              <p className="text-sm text-gray-600">{product.countryOfOrigin}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;