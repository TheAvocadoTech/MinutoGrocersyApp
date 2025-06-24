// Fixed CategoryList.js - Properly aligned with your backend API response
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../utils/api';

// Default category icons mapping
const categoryIcons = {
  'vegetables': '🥦',
  'fruits': '🍎',
  'dairy': '🥛',
  'bakery': '🍞',
  'snacks': '🍿',
  'beverages': '🥤',
  'household': '🧹',
  'personal care': '🧴',
  'rice': '🍚',
  'ghee': '🥄',
  'dals': '🌱',
  'pulses': '🌱',
  'oils': '🫙',
  'atta': '🌾',
  'flour': '🌾',
  'picks': '⭐',
  'meat': '🥩',
  'fish': '🐟',
  'spices': '🌶️',
  'tea': '🍵',
  'coffee': '☕',
  'default': '🛒'
};

// Function to get appropriate icon for category
const getCategoryIcon = (categoryName) => {
  const name = categoryName.toLowerCase();
  
  // Check for exact matches first
  if (categoryIcons[name]) {
    return categoryIcons[name];
  }
  
  // Check for partial matches
  for (const [key, icon] of Object.entries(categoryIcons)) {
    if (name.includes(key) || key.includes(name)) {
      return icon;
    }
  }
  
  return categoryIcons.default;
};

// Helper function to generate category slug from name
const generateCategorySlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching categories from API...');
      const response = await getCategories({ limit: 50 });
      
      console.log('Full API Response:', response);
      
      // Based on your backend controller, the response structure is:
      // { message: "Categories retrieved successfully", categories: [...], count: X, pagination: {...} }
      
      if (response.data && response.data.categories && Array.isArray(response.data.categories)) {
        const categoriesData = response.data.categories;
        console.log('Categories data from API:', categoriesData);
        
        if (categoriesData.length > 0) {
          // Transform backend data - your model has: _id, name, createdAt, updatedAt
          const transformedCategories = categoriesData.map(category => {
            console.log('Processing category:', category);
            return {
              id: category._id,
              name: category.name,
              icon: getCategoryIcon(category.name),
              slug: generateCategorySlug(category.name),
              createdAt: category.createdAt,
              updatedAt: category.updatedAt
            };
          });
          
          console.log('Transformed categories:', transformedCategories);
          setCategories(transformedCategories);
          setError(null);
        } else {
          console.log('No categories found in API response');
          setError('No categories available');
          setCategories(getFallbackCategories());
        }
      } else {
        console.log('Unexpected response structure:', response.data);
        throw new Error('Invalid API response structure');
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      console.error('Error details:', {
        message: err.message,
        response: err.response,
        status: err.response?.status,
        data: err.response?.data
      });
      
      const errorMessage = err.response?.data?.message || err.message || 'Failed to load categories';
      setError(errorMessage);
      
      // Fallback to hardcoded categories if API fails
      console.log('Using fallback categories');
      setCategories(getFallbackCategories());
    } finally {
      setLoading(false);
    }
  };

  const getFallbackCategories = () => [
    { id: 'fallback-1', name: 'Vegetables', icon: '🥦', slug: 'vegetables' },
    { id: 'fallback-2', name: 'Fruits', icon: '🍎', slug: 'fruits' },
    { id: 'fallback-3', name: 'Dairy', icon: '🥛', slug: 'dairy' },
    { id: 'fallback-4', name: 'Bakery', icon: '🍞', slug: 'bakery' },
    { id: 'fallback-5', name: 'Snacks', icon: '🍿', slug: 'snacks' },
    { id: 'fallback-6', name: 'Beverages', icon: '🥤', slug: 'beverages' },
    { id: 'fallback-7', name: 'Household', icon: '🧹', slug: 'household' },
    { id: 'fallback-8', name: 'Personal Care', icon: '🧴', slug: 'personal-care' },
    { id: 'fallback-9', name: 'Rice & Grains', icon: '🍚', slug: 'rice-grains' },
    { id: 'fallback-10', name: 'Oils & Ghee', icon: '🫙', slug: 'oils-ghee' },
    { id: 'fallback-11', name: 'Dals & Pulses', icon: '🌱', slug: 'dals-pulses' },
    { id: 'fallback-12', name: 'Spices', icon: '🌶️', slug: 'spices' }
  ];

  // Loading skeleton component
  const CategorySkeleton = () => (
    <div className="flex flex-col items-center justify-center p-2 rounded-lg animate-pulse">
      <div className="bg-gray-200 rounded-full h-14 w-14 md:h-16 md:w-16 mb-2"></div>
      <div className="bg-gray-200 h-4 w-16 rounded"></div>
    </div>
  );

  if (loading) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Browse All Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
            {Array(12).fill(0).map((_, index) => (
              <CategorySkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Browse All Categories</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {categories.length} categories
            </span>
            {error && (
              <button
                onClick={fetchCategories}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
              >
                🔄 Retry
              </button>
            )}
          </div>
        </div>
        
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-yellow-800 text-sm">
              ⚠️ {error}
              {categories.length > 0 && (
                <span className="block mt-1 text-yellow-700">
                  Showing fallback categories. Check browser console for API details.
                </span>
              )}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-white group border border-transparent hover:border-green-200"
            >
              <div className="bg-green-100 rounded-full p-3 mb-2 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-green-200 group-hover:shadow-md">
                <span className="text-xl md:text-2xl">{category.icon}</span>
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-green-800 text-center leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>

        {categories.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No categories available</h3>
            <p className="text-gray-500 mb-4">Unable to load categories from the server.</p>
            <button
              onClick={fetchCategories}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              🔄 Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryList;