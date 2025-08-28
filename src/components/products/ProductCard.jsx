import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Rating from '../common/Rating';

// ✅ Dummy 20 products
const dummyProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (Math.random() * 100 + 50).toFixed(2),
  originalPrice: (Math.random() * 150 + 100).toFixed(2),
  ratings: (Math.random() * 5).toFixed(1),
  ratingsCount: Math.floor(Math.random() * 200 + 20),
  image: `https://picsum.photos/200?random=${i + 1}`
}));

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
          onClick={() => onAddToCart && onAddToCart(product)}
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

// ✅ Export grid of 20 dummy products for testing
export const ProductListDemo = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {dummyProducts.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={(p) => console.log("Added:", p)} />
      ))}
    </div>
  );
};

export default ProductCard;
