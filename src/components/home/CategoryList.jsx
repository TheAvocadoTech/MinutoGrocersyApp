import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../Services/CategoryService";

// Helper function to generate category slug from name
const generateCategorySlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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

      const data = await getCategories({ limit: 50 });
      if (data.categories && Array.isArray(data.categories)) {
        const transformed = data.categories.map((cat) => ({
          id: cat._id,
          name: cat.name,
          slug: generateCategorySlug(cat.name),
          image: cat.image,
          createdAt: cat.createdAt,
        }));

        setCategories(transformed);
      } else {
        throw new Error("Invalid API response");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load categories");
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

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
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
            Browse All Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
            {Array(12)
              .fill(0)
              .map((_, index) => (
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
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Browse All Categories
          </h2>
          <div className="flex items-center gap-2">
            {/* <span className="text-sm text-gray-500">
              Showing {Math.min(categories.length, 20)} of {categories.length} categories
            </span> */}
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
            <p className="text-yellow-800 text-sm">⚠️ {error}</p>
          </div>
        )}

        {/* Show only first 20 categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
          {categories.slice(0, 12).map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-white group border border-transparent hover:border-green-200"
            >
              <div className="bg-green-50 rounded-full mb-2 h-16 w-16 md:h-20 md:w-20 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-green-100 group-hover:shadow-md overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-green-800 text-center leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
