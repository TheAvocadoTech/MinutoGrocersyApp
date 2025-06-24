import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ChevronRight, ChevronLeft, AlertCircle, RefreshCw } from 'lucide-react';
import { getProductsByCategory, getCategories, addToCart } from '../utils/api';

const categoryIcons = {
  'vegetables': '🥦', 'fruits': '🍎', 'dairy': '🥛', 'bakery': '🍞', 'snacks': '🍿',
  'beverages': '🥤', 'household': '🧹', 'personal care': '🧴', 'rice': '🍚', 'ghee': '🥄',
  'dals': '🌱', 'oils': '🫙', 'atta': '🌾', 'default': '🛒'
};

const getCategoryIcon = (name) => {
  const n = name?.toLowerCase() || '';
  return categoryIcons[n] || Object.entries(categoryIcons).find(([k]) => n.includes(k))?.[1] || categoryIcons.default;
};

const generateSlug = (name) => name?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';

const fallbackCategories = [
  { id: 'f1', name: 'Vegetables', slug: 'vegetables' },
  { id: 'f2', name: 'Fruits', slug: 'fruits' },
  { id: 'f3', name: 'Dairy', slug: 'dairy' },
  { id: 'f4', name: 'Bakery', slug: 'bakery' },
  { id: 'f5', name: 'Snacks', slug: 'snacks' },
  { id: 'f6', name: 'Beverages', slug: 'beverages' }
].map(cat => ({ ...cat, icon: getCategoryIcon(cat.name) }));

const bannerImages = ["/banner/3D.jpg", "/home.png"];

// Simple cache
let cache = { categories: null, time: 0 };
const CACHE_TIME = 5 * 60 * 1000;

const Skeleton = ({ type = 'product' }) => (
  <div className={`bg-white rounded-lg p-4 animate-pulse ${type === 'banner' ? 'h-48' : 'h-64'}`}>
    <div className={`bg-gray-200 rounded ${type === 'banner' ? 'h-full' : 'h-32 mb-3'}`}></div>
    {type === 'product' && (
      <>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </>
    )}
  </div>
);

const CategoryPage = () => {
  const { slug } = useParams();
  const [state, setState] = useState({
    products: [],
    categories: [],
    loading: true,
    error: null,
    bannerIndex: 0,
    showMobileCategories: false,
    addingToCart: {}
  });

  const updateState = (updates) => setState(prev => ({ ...prev, ...updates }));

  const activeCategory = state.categories.find(cat => cat.slug === slug) || {
    name: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Products',
    icon: getCategoryIcon(slug),
    slug: slug || 'products'
  };

  const fetchCategories = useCallback(async () => {
    if (cache.categories && Date.now() - cache.time < CACHE_TIME) {
      updateState({ categories: cache.categories });
      return;
    }

    try {
      const response = await getCategories({ limit: 50 });
      const categories = response.data?.categories?.map(cat => ({
        id: cat._id,
        name: cat.name,
        icon: getCategoryIcon(cat.name),
        slug: generateSlug(cat.name)
      })) || fallbackCategories;
      
      cache = { categories, time: Date.now() };
      updateState({ categories });
    } catch (err) {
      console.error('Categories error:', err);
      updateState({ categories: fallbackCategories });
    }
  }, []);

  const fetchProducts = useCallback(async (categorySlug) => {
    if (!categorySlug) return;
    
    updateState({ loading: true, error: null });
    
    try {
      // Find the category name from slug to match with backend
      const category = state.categories.find(cat => cat.slug === categorySlug);
      const categoryName = category?.name || categorySlug;
      
      console.log('Fetching products for category:', categoryName);
      
      const response = await getProductsByCategory(categoryName, { limit: 50 });
      
      console.log('API Response:', response.data);
      
      // Handle backend response structure - items come from backend as 'items' array
      const items = response.data?.items || response.data?.products || [];
      
      console.log('Items received:', items);
      
      const products = items.map(item => ({
        id: item._id,
        name: item.name,
        price: item.price?.mrp || 0,
        discountedPrice: item.price?.sellingPrice || item.price?.mrp || 0,
        discountPercentage: item.price?.discountPercent || 0,
        image: item.images?.[0]?.url || '/banner/3D.jpg',
        unit: `${item.unit?.quantity || 1} ${item.unit?.unitType || 'piece'}`,
        inStock: item.isAvailable && item.stock > 0,
        brand: item.brand,
        description: item.description,
        category: item.category,
        subcategory: item.subcategory
      }));
      
      console.log('Processed products:', products);
      
      updateState({ products, loading: false });
    } catch (err) {
      console.error('Products error:', err);
      updateState({ 
        error: err.response?.data?.message || 'Failed to load products',
        products: [],
        loading: false 
      });
    }
  }, [state.categories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (slug && state.categories.length > 0) {
      fetchProducts(slug);
    } else if (!slug) {
      updateState({ loading: false });
    }
  }, [slug, state.categories, fetchProducts]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateState({ bannerIndex: (state.bannerIndex + 1) % bannerImages.length });
    }, 5000);
    return () => clearInterval(interval);
  }, [state.bannerIndex]);

  const handleAddToCart = async (product) => {
    updateState({ addingToCart: { ...state.addingToCart, [product.id]: true } });
    try {
      await addToCart({ productId: product.id, quantity: 1, price: product.discountedPrice });
      console.log('Product added to cart:', product.name);
    } catch (err) {
      console.error('Add to cart error:', err);
    } finally {
      updateState({ addingToCart: { ...state.addingToCart, [product.id]: false } });
    }
  };

  const handleRetry = () => {
    if (slug) {
      fetchProducts(slug);
    } else {
      fetchCategories();
    }
  };

  if (state.loading) {
    return (
      <div className="bg-gray-50 min-h-screen p-4">
        <div className="max-w-6xl mx-auto">
          <Skeleton type="banner" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[...Array(8)].map((_, i) => <Skeleton key={i} />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        {/* Banner */}
        <div className="relative h-48 rounded-lg overflow-hidden mb-6">
          <img 
            src={bannerImages[state.bannerIndex]} 
            alt="Banner" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = "/banner/3D.jpg"; }}
          />
          <button 
            onClick={() => updateState({ bannerIndex: (state.bannerIndex - 1 + bannerImages.length) % bannerImages.length })}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => updateState({ bannerIndex: (state.bannerIndex + 1) % bannerImages.length })}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Error */}
        {state.error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 flex items-center">
            <AlertCircle className="text-yellow-600 mr-2" size={20} />
            <span className="text-yellow-800 flex-grow">{state.error}</span>
            <button 
              onClick={handleRetry} 
              className="text-yellow-600 hover:text-yellow-800 ml-2"
              title="Retry"
            >
              <RefreshCw size={16} />
            </button>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4">
          {/* Mobile category toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => updateState({ showMobileCategories: !state.showMobileCategories })}
              className="w-full bg-white rounded-lg p-3 flex justify-between items-center"
            >
              <div className="flex items-center">
                <span className="text-xl mr-2">{activeCategory.icon}</span>
                <span className="font-medium">{activeCategory.name}</span>
              </div>
              <ChevronRight className={`transition-transform ${state.showMobileCategories ? 'rotate-90' : ''}`} size={20} />
            </button>
          </div>

          {/* Categories sidebar */}
          <div className={`${state.showMobileCategories ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white rounded-lg p-4`}>
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <div className="space-y-2">
              {state.categories.map((category) => (
                <Link 
                  key={category.id} 
                  to={`/category/${category.slug}`}
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    category.slug === slug ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl mr-3">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="flex-grow">
            <div className="bg-white p-4 rounded-lg mb-4">
              <h1 className="text-xl font-semibold flex items-center">
                <span className="text-2xl mr-2">{activeCategory.icon}</span>
                {activeCategory.name}
              </h1>
              <p className="text-sm text-gray-600 mt-1">{state.products.length} items available</p>
            </div>
            
            {state.products.length === 0 && !state.loading ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  {state.error ? 'There was an error loading products.' : 'This category is currently empty.'}
                </p>
                <button 
                  onClick={handleRetry}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {state.products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-square relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                          onError={(e) => { e.target.src = "/banner/3D.jpg"; }}
                        />
                        {product.discountPercentage > 0 && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            {product.discountPercentage}%
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-red-600">OUT OF STOCK</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-sm font-medium line-clamp-2 h-10 hover:text-green-700">{product.name}</h3>
                        {product.brand && (
                          <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
                        )}
                        <div className="mt-2">
                          <span className="text-sm font-medium">₹{product.discountedPrice}</span>
                          {product.discountPercentage > 0 && (
                            <span className="ml-2 text-xs text-gray-500 line-through">₹{product.price}</span>
                          )}
                          <span className="ml-1 text-xs text-gray-500">/{product.unit}</span>
                        </div>
                      </Link>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock || state.addingToCart[product.id]}
                        className={`mt-3 w-full py-2 text-xs font-medium rounded flex items-center justify-center transition-colors ${
                          product.inStock 
                            ? (state.addingToCart[product.id] ? 'bg-gray-400 text-white' : 'bg-green-500 hover:bg-green-600 text-white')
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {state.addingToCart[product.id] ? (
                          <>
                            <RefreshCw size={14} className="mr-1 animate-spin" />
                            ADDING...
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={14} className="mr-1" />
                            {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;