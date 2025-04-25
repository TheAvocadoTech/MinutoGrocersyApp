import React from 'react';
import { Link } from 'react-router-dom';

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

const CategoryList = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Browse All Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-white group"
            >
              <div className="bg-green-100 rounded-full p-3 mb-2 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-200">
                <span className="text-xl md:text-2xl">{category.icon}</span>
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-green-800 text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;