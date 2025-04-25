import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';

const ProductCarousel = ({ title, products, seeAllLink }) => {
  const scrollRef = useRef(null);

  if (!products || products.length === 0) {
    return <div className="py-8 text-center text-gray-500">No products to display</div>;
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-6">
      {title && (
        <div className="flex justify-between items-center mb-4 px-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          {seeAllLink && (
            <Link 
              to={seeAllLink} 
              className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
            >
              See All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      )}
      
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 px-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map(product => (
            <div 
              key={product.id} 
              className="snap-start flex-shrink-0 w-36 sm:w-40 md:w-48 lg:w-52"
            >
              <ProductCard 
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  discount: product.discountPercentage ? `${product.discountPercentage}%` : '',
                  unit: product.unit,
                  discountedPrice: product.discountedPrice
                }} 
              />
            </div>
          ))}
        </div>
        
        {/* Navigation buttons - only visible on larger screens or on hover */}
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 md:flex items-center justify-center hidden group-hover:flex transition-all duration-300 focus:outline-none"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full p-2 md:flex items-center justify-center hidden group-hover:flex transition-all duration-300 focus:outline-none"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;