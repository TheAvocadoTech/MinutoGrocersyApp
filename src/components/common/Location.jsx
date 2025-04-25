import React, { useState, useEffect } from 'react';

const Location = ({ isOpen, onClose, onSelectLocation }) => {
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleManualLocationSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      onSelectLocation(location);
      onClose();
    }
  };

  const fetchGeolocation = () => {
    setIsLoading(true);
    setError(null);
    
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // Normally, you would use a reverse geocoding API here
          // For this example, we'll just use the coordinates
          const locationString = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          setLocation(locationString);
          onSelectLocation(locationString);
          setIsLoading(false);
          onClose();
        } catch (error) {
          setError('Failed to fetch your location. Please try again or enter manually.');
          setIsLoading(false);
        }
      },
      (error) => {
        setError('Unable to retrieve your location. Please try again or enter manually.');
        setIsLoading(false);
      }
    );
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close on ESC key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Select Location</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <button 
            onClick={fetchGeolocation}
            disabled={isLoading}
            className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-400"
          >
            {isLoading ? (
              <span>Detecting your location...</span>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Detect my location automatically</span>
              </>
            )}
          </button>

          <div className="flex items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 bg-white">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <form onSubmit={handleManualLocationSubmit}>
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Enter your location manually
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter street, city, or zip code"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gray-100 text-gray-800 p-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Confirm location
            </button>
          </form>

          {error && (
            <div className="text-red-500 text-sm mt-2">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;