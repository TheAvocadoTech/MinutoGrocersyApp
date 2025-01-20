import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogSection = () => {
  const blogs = [
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-6 lg:mb-10 underline">
          हमारे ब्लॉग पढ़ें
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Swiper Section */}
          <div className="lg:w-3/4 w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogs.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        className="text-orange-500 hover:underline font-semibold mt-auto"
                      >
                        पूरा ब्लॉग पढ़ें
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/4 w-full bg-white shadow-lg rounded-lg p-6 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">और ब्लॉग पढ़ें</h3>
            <p className="text-gray-600 mb-4">
              नई और दिलचस्प सामग्री पढ़ने के लिए, हमारे अन्य ब्लॉग देखें। आप
              नवीनतम विषयों पर जानकारी प्राप्त कर सकते हैं।
            </p>
            <a
              href="/more-blogs"
              className="inline-block mt-4 text-orange-500 font-semibold hover:underline"
            >
              और जानें
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
