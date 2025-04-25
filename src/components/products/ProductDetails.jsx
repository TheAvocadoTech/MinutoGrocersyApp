import React, { useState } from 'react';
import Button from '../common/Button';
import Rating from '../common/Rating';
import QuantitySelector from '../common/QuantitySelector';

const ProductDetail = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };
  
  return (
    <div className="product-detail">
      <div className="mb-6">   
        <h1 className="text-2xl font-medium mb-2">{product.name}</h1>
        
        {product.ratings && (
          <div className="flex items-center mb-4">
            <Rating value={product.ratings} />
            <span className="text-sm text-gray-500 ml-2">{product.ratings} ({product.ratingsCount} reviews)</span>
          </div>
        )}
        
        <div className="mb-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover rounded-lg"
          />
          
          {product.gallery && product.gallery.length > 0 && (
            <div className="flex space-x-2 mt-2">
              {product.gallery.map((img, index) => (
                <div key={index} className="w-16 h-16 border rounded cursor-pointer">
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-medium">Rs.{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through">Rs.{product.originalPrice}</span>
            )}
          </div>
          
          {product.mrp && (
            <p className="text-sm text-gray-600">MRP {product.mrp} (inclusive of all taxes)</p>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Product Details</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <h3 className="font-medium mb-1">Key Features</h3>
            <ul className="list-disc pl-5">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div>
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex mb-1">
                <span className="font-medium w-24">{key}</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        <QuantitySelector
          quantity={quantity}
          onIncrease={() => setQuantity(prev => prev + 1)}
          onDecrease={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
        />
        
        <Button 
          onClick={handleAddToCart}
          variant="primary"
          className="flex-grow"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;