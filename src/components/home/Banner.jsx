import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBanners } from "../Services/BannerService";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getBanners();
      if (data.success && Array.isArray(data.banners)) {
        setBanners(data.banners);
      } else {
        throw new Error("Invalid banner data");
      }
    } catch (err) {
      setError("Failed to load banners");
      setBanners([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-red-600 text-white py-12 text-center">
        <p>Loading banners...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-600 text-white py-12 text-center">
        <p>{error}</p>
        <button
          onClick={fetchBanners}
          className="mt-3 px-4 py-2 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-[400px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            {/* Banner Image */}
            <img
              src={banner.image}
              alt={banner.Description || "Banner"}
              className="w-full h-[400px] object-cover"
            />

            {/* Overlay with text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Minutos: Freshness Delivered Fast & Local
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl">
                {banner.Description}
              </p>
              <Link
                to="/products"
                className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
