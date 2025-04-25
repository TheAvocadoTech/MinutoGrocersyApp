import React from 'react';
import { Link } from 'react-router-dom';

const Promotions = ({ promos }) => {
  if (!promos || promos.length === 0) {
    return null;
  }

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {promos.map((promo) => (
          <Link
            to={promo.link}
            key={promo.id}
            className="relative overflow-hidden rounded-lg shadow-md group transform transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {promo.image ? (
              <div className="aspect-[16/5] sm:aspect-[16/6] md:aspect-[16/5] w-full">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="p-4 md:p-6">
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      {promo.title}
                    </h3>
                    {promo.description && (
                      <p className="text-white/90 text-sm md:text-base hidden sm:block">
                        {promo.description}
                      </p>
                    )}
                    <span className="mt-3 inline-block px-4 py-1 bg-white text-sm font-medium text-gray-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-[16/5] sm:aspect-[16/6] md:aspect-[16/5] w-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                <div className="p-4 md:p-6 text-center">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    {promo.title}
                  </h3>
                  {promo.description && (
                    <p className="text-white/90 text-sm md:text-base mt-2 hidden sm:block">
                      {promo.description}
                    </p>
                  )}
                  <span className="mt-3 inline-block px-4 py-1 bg-white text-sm font-medium text-gray-900 rounded-full">
                    Shop Now
                  </span>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Promotions;