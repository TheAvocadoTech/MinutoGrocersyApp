import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogSection = () => {
  const blogs = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "स्वस्थ जीवन के लिए टिप्स",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "प्रेरणादायक कहानियां",
      description: "सफलता की कहानियों से प्रेरणा लें और अपने लक्ष्य प्राप्त करें।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "तकनीकी ब्लॉग",
      description: "नई तकनीकों और विकास के बारे में हमारी जानकारी प्राप्त करें।",
      link: "#",
    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "स्वस्थ जीवन के लिए टिप्स",
        description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
        link: "#",
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "प्रेरणादायक कहानियां",
        description: "सफलता की कहानियों से प्रेरणा लें और अपने लक्ष्य प्राप्त करें।",
        link: "#",
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "तकनीकी ब्लॉग",
        description: "नई तकनीकों और विकास के बारे में हमारी जानकारी प्राप्त करें।",
        link: "#",
      },
    {
      image: "https://via.placeholder.com/300x200",
      title: "यात्रा की कहानियां",
      description: "हमारी यात्रा की कहानियां पढ़ें और दुनिया को जानें।",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          हमारे ब्लॉग पढ़ें
        </h2>
        <div className="px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-14"
          >
            {blogs.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
