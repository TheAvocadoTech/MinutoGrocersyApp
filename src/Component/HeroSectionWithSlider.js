import React, { useEffect, useRef, useState } from "react";

const HeroSliderWithContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const slides = [
    {
      image: "https://img.youtube.com/vi/maF-veTzMIU/hqdefault.jpg",
      title: "दिल्ली चुनाव में चिराग पासवान का चौंकाने वाला एलान LIVE",
      description: "Stay updated with the latest news and stories happening around the world.",
    },
    {
      image: "https://img.youtube.com/vi/maF-veTzMIU/hqdefault.jpg",
      title: "दिल्ली चुनाव में चिराग पासवान का चौंकाने वाला एलान LIVE",
      description: "Stay updated with the latest news and stories happening around the world.",
    },
    {
      image: "https://img.youtube.com/vi/maF-veTzMIU/hqdefault.jpg",
      title: "दिल्ली चुनाव में चिराग पासवान का चौंकाने वाला एलान LIVE",
      description: "Stay updated with the latest news and stories happening around the world.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden bg-gray-200 mt-20 lg:mt-0">
      <div
        ref={sliderRef}
        className="flex w-full h-full transition-all duration-700 overflow-x-hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white p-4 sm:p-6 lg:p-8  rounded-md w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
              <h2 className="text-lg mt-96 sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-center">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSliderWithContent;
