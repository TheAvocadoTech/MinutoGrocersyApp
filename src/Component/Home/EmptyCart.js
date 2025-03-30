import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const EmptyCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Cart Icon in Navbar */}
      <button 
        onClick={toggleCart} 
        className="p-2 rounded-full hover:bg-gray-100"
        aria-label="Open cart"
      >
        <ShoppingCart size={24} />
      </button>

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-end">
          <div 
            ref={modalRef}
            className="w-72 h-full bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out overflow-auto"
          >
            {/* Cart Header */}
            <div className="p-4 flex items-center bg-white">
              <button 
                onClick={toggleCart} 
                className="mr-2"
                aria-label="Close cart"
              >
                <ArrowLeft size={20} />
              </button>
              <h2 className="text-base font-medium">Your Cart</h2>
            </div>

            {/* Empty Cart Content */}
            <div className="p-4">
              <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
                <div className="bg-gray-200 w-24 h-24 rounded-lg mb-4"></div>
                <p className="text-gray-600 mb-4">Your cart is empty</p>
                <button 
                  className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm w-full max-w-xs"
                >
                  Browse Products
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default EmptyCart