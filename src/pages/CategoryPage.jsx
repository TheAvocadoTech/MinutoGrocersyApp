import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react';

// Updated categories list with new data
const categories = [
  { id: 1, name: 'Vegetables', icon: '🥦', slug: 'vegetables' },
  { id: 2, name: 'Fruits', icon: '🍎', slug: 'fruits' },
  { id: 3, name: 'Dairy', icon: '🥛', slug: 'dairy' },
  { id: 4, name: 'Bakery', icon: '🍞', slug: 'bakery' },
  { id: 5, name: 'Snacks', icon: '🍿', slug: 'snacks' },
  { id: 6, name: 'Beverages', icon: '🥤', slug: 'beverages' },
  { id: 7, name: 'Household', icon: '🧹', slug: 'household' },
  { id: 8, name: 'Personal Care', icon: '🧴', slug: 'personal-care' },
  { id: 9, name: 'Rice & More', icon: '🍚', slug: 'rice-more' },
  { id: 10, name: 'Ghee', icon: '🥄', slug: 'ghee' },
  { id: 11, name: 'Dals & Pulses', icon: '🌱', slug: 'dals-pulses' },
  { id: 12, name: 'Oils', icon: '🫙', slug: 'oils' },
  { id: 13, name: 'Atta & Flours', icon: '🌾', slug: 'atta-flours' },
  { id: 14, name: 'Top Picks', icon: '⭐', slug: 'top-picks' },
];

const CategoryPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [showCategoriesMobile, setShowCategoriesMobile] = useState(false);
  
  // Banner images for carousel
  const bannerImages = [
    "/banner/3D.jpg",
    "/home.png",
    "/banner/3D.jpg",
    "/home.png"
  ];
  
  // Find the active category based on slug
  const activeCategory = categories.find(cat => cat.slug === slug) || categories[13]; // Default to Top Picks

  useEffect(() => {
    // This would be replaced with actual API calls based on slug
    const fetchCategoryProducts = () => {
      // Simulate API delay
      setTimeout(() => {
        // Mock data for demonstration
        const generateMockProducts = (count) => {
          const mockProducts = [];
          for (let i = 1; i <= count; i++) {
            const basePrice = Math.floor(Math.random() * 1500) + 100; // Base price in INR
            const discountPercentage = Math.floor(Math.random() * 30 + 10);
            const discountedPrice = Math.floor(basePrice * (1 - discountPercentage/100));
            
            mockProducts.push({
              id: i,
              name: `${activeCategory.name} Product ${i}`,
              price: basePrice,
              discountedPrice: discountedPrice,
              discountPercentage: discountPercentage,
              image: '/assets/product-placeholder.jpg',
              unit: ['kg', 'pack', 'dozen', 'liter'][Math.floor(Math.random() * 4)],
              inStock: Math.random() > 0.1 // 90% of products in stock
            });
          }
          return mockProducts;
        };

        setProducts(generateMockProducts(20));
        setIsLoading(false);
      }, 800);
    };

    fetchCategoryProducts();
    // Hide mobile categories menu when changing categories
    setShowCategoriesMobile(false);
  }, [slug, activeCategory.name]);

  // Banner carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change banner every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) => 
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) => 
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  const toggleCategoriesMobile = () => {
    setShowCategoriesMobile(!showCategoriesMobile);
  };

  // Loading state with skeleton UI
  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen pb-10">
        {/* Banner skeleton */}
        <div className="max-w-screen-xl mx-auto px-4 mt-4 mb-6">
          <div className="relative h-40 md:h-64 rounded-lg overflow-hidden bg-gray-200 animate-pulse"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar skeleton */}
            <div className="w-full md:w-56 flex-shrink-0 bg-white mb-4 md:mb-0 md:mr-4 rounded-lg shadow-sm p-4 hidden md:block">
              <div className="mb-4 h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center p-2 rounded-lg">
                    <div className="w-8 h-8 bg-gray-200 rounded-md animate-pulse mr-3"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content skeleton */}
            <div className="flex-grow">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm h-64">
                    <div className="aspect-square bg-gray-200 animate-pulse"></div>
                    <div className="p-3">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2 mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded animate-pulse w-full mt-2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Banner carousel section */}
      <div className="max-w-screen-xl mx-auto px-4 mt-4 mb-6">
        <div className="relative h-40 sm:h-48 md:h-64 rounded-lg overflow-hidden shadow">
          <img 
            src={bannerImages[currentBannerIndex]} 
            alt="Banner" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/images/default-banner.jpg";
            }}
          />
          
          {/* Banner navigation controls */}
          <button 
            onClick={prevBanner}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow-md text-gray-800"
            aria-label="Previous banner"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextBanner}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow-md text-gray-800"
            aria-label="Next banner"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Banner navigation dots */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentBannerIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={() => setCurrentBannerIndex(index)}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        {/* Mobile category toggle button */}
        <div className="md:hidden mb-4">
          <button 
            onClick={toggleCategoriesMobile}
            className="w-full py-3 px-4 bg-white rounded-lg shadow-sm flex justify-between items-center text-left"
          >
            <div className="flex items-center">
              <span className="text-xl mr-2">{activeCategory.icon}</span>
              <span className="font-medium text-gray-800">{activeCategory.name}</span>
            </div>
            <ChevronRight className={`text-gray-500 transition-transform ${showCategoriesMobile ? 'rotate-90' : ''}`} size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left sidebar for categories - with mobile version */}
          <div className={`${showCategoriesMobile ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0 bg-white mb-4 md:mb-0 md:mr-4 rounded-lg shadow-sm overflow-hidden`}>
            <div className="p-4 border-b">
              <h2 className="font-semibold text-lg text-gray-800">Categories</h2>
            </div>
            <div className="max-h-96 md:max-h-screen overflow-y-auto p-3">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/category/${category.slug}`}
                  className={`flex items-center p-2 rounded-lg transition-all hover:translate-x-1 ${
                    category.slug === slug 
                      ? 'bg-green-50 text-green-700 border-l-4 border-green-500' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center mr-3 ${
                    category.slug === slug ? 'bg-green-100' : 'bg-gray-100'
                  } rounded-md`}>
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <span className={`text-sm ${category.slug === slug ? 'font-medium' : ''}`}>
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main content area - grid of products */}
          <div className="flex-grow">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h1 className="text-xl font-semibold text-gray-800 flex items-center">
                <span className="text-2xl mr-2">{activeCategory.icon}</span>
                <span>{activeCategory.name}</span>
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Browse our selection of {activeCategory.name.toLowerCase()} ({products.length} items)
              </p>
            </div>
            
            {products.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600">We couldn't find any products in this category right now.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/banner/3D.jpg";
                          }}
                        />
                        {product.discountPercentage > 0 && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center shadow">
                            {product.discountPercentage}%<br/>OFF
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="bg-white/90 px-2 py-1 rounded text-xs font-semibold text-red-600">OUT OF STOCK</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-3">
                      <Link to={`/product/${product.id}`} className="block">
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10 hover:text-green-700">{product.name}</h3>
                        <div className="mt-2 flex items-baseline">
                          <span className="text-sm font-medium text-gray-900">
                            ₹{product.discountedPrice}
                          </span>
                          {product.discountPercentage > 0 && (
                            <span className="ml-2 text-xs text-gray-500 line-through">
                              ₹{product.price}
                            </span>
                          )}
                          <span className="ml-1 text-xs text-gray-500">
                            /{product.unit}
                          </span>
                        </div>
                      </Link>
                      <button 
                        className={`mt-3 w-full rounded py-1.5 text-xs font-medium flex items-center justify-center transition-colors ${
                          product.inStock 
                            ? 'bg-green-500 hover:bg-green-600 text-white' 
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart size={14} className="mr-1" />
                        {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Show count at the bottom */}
            {products.length > 0 && (
              <div className="mt-6 text-center text-sm text-gray-600">
                Showing {products.length} products in {activeCategory.name}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;