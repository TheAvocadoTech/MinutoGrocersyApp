import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogSection = () => {
  const blogs = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukrae50x7vj1clgxI6XzkidYbuo6k3nsDLQ&s",
      title: "स्वस्थ जीवन के लिए टिप्स",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "#",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukrae50x7vj1clgxI6XzkidYbuo6k3nsDLQ&s",
      title: "स्वस्थ जीवन के लिए टिप्स",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "#",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukrae50x7vj1clgxI6XzkidYbuo6k3nsDLQ&s",
      title: "स्वस्थ जीवन के लिए टिप्स",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "#",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukrae50x7vj1clgxI6XzkidYbuo6k3nsDLQ&s",
      title: "स्वस्थ जीवन के लिए टिप्स",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "#",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukrae50x7vj1clgxI6XzkidYbuo6k3nsDLQ&s",
      title: "स्वस्थ जीवन के लिए टिप्स",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "#",
    },
  ];

  return (
    <section className="py-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-8">
          हमारे ब्लॉग पढ़ें
        </h2>
        <div className="px-12">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            navigation
            autoplay={{
              delay: 3000, // 3-second delay
              disableOnInteraction: false, // Keeps autoplay even after interaction
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {blogs.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto" style={{ maxWidth: "300px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a
                      href={item.link}
                      className="text-orange-500 hover:underline font-semibold"
                    >
                      पूरा ब्लॉग पढ़ें
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
