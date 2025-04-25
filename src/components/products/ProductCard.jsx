import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Rating from '../common/Rating';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card border rounded-md overflow-hidden transition-shadow hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="h-40 bg-gray-200">
          {product.image && (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </Link>
      
      <div className="p-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
        </Link>
        
        {product.ratings && (
          <div className="flex items-center mb-1">
            <Rating value={product.ratings} size="small" />
            <span className="text-xs text-gray-500 ml-1">({product.ratingsCount})</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Rs.{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">Rs.{product.originalPrice}</span>
          )}
        </div>
        
        <Button 
          onClick={() => onAddToCart(product)}
          variant="primary"
          fullWidth
          className="text-sm py-1"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;