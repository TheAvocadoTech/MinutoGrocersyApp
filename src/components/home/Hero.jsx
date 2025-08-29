import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden">
      {/* Background pattern for added visual interest */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text content - responsive and animated */}
          <div className="md:w-1/2 lg:w-5/12 mb-10 md:mb-0 z-10 animate-fadeIn">
            <span className="inline-block bg-yellow-400 text-black font-semibold px-3 py-1 rounded-full text-sm mb-4 animate-fadeSlideUp">
              Your Trusted Local Delivery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fadeSlideUp" style={{ animationDelay: "0.1s" }}>
              Minutos: <span className="text-yellow-300">Freshness</span> Delivered, Fast and Local
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white text-opacity-90 max-w-lg animate-fadeSlideUp" style={{ animationDelay: "0.2s" }}>
              Experience the fastest way to get groceries right away from your local kirana stores. Always fresh, always on time.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeSlideUp" style={{ animationDelay: "0.3s" }}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 hidden sm:flex items-center text-sm text-white text-opacity-90 animate-fadeSlideUp" style={{ animationDelay: "0.4s" }}>
              <span className="flex items-center mr-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                10 Min Delivery
              </span>
              <span className="flex items-center mr-6">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Fresh Products
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Local Stores
              </span>
            </div>
          </div>
          
          {/* Image container with floating effects */}
          <div className="md:w-1/2 lg:w-7/12 flex justify-center md:justify-end relative z-10">
            <div className="relative animate-float">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full opacity-50 animate-pulse hidden sm:block"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-red-400 rounded-full opacity-50 animate-pulse hidden sm:block" style={{ animationDelay: "1s" }}></div>
              
              {/* Main image with shadow */}
              <div className="relative bg-white bg-opacity-10 rounded-3xl p-2 sm:p-3 shadow-2xl">
                <img 
                  src="https://imgs.search.brave.com/63uFw-Bv8OtLVlf5YVoCwjkttsxiqyISeE6uJy8Udow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvRm9v/ZC1EZWxpdmVyeS1Q/TkctSXNvbGF0ZWQt/Q2xpcGFydC5wbmc" 
                  alt="Delivery person with groceries" 
                  className="relative z-10 max-w-full h-auto rounded-2xl"
                  style={{ maxWidth: "500px" }}
                />
              </div>
              
              {/* Floating graphics */}
              <div className="absolute top-1/4 -left-6 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-lg shadow-lg animate-float hidden sm:flex items-center" style={{ animationDelay: "0.5s" }}>
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
                <span className="font-bold text-sm">Fast Delivery!</span>
              </div>
              
              <div className="absolute bottom-1/4 -right-4 transform translate-y-1/2 bg-white text-red-600 p-2 rounded-lg shadow-lg animate-float hidden sm:block" style={{ animationDelay: "1.2s" }}>
                <span className="font-bold text-sm">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile app CTA - visible on larger screens */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-700 to-red-600 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <p className="text-white text-opacity-90 text-sm flex items-center">
            <span className="mr-2">📱</span>
            Download our app for the best experience!
            <a href="#" className="ml-2 underline font-medium">Get the app</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your global CSS or component styles
const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fadeSlideUp {
  animation: fadeSlideUp 0.8s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
`;

export default Hero;