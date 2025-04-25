import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../common/SearchBar';
import Location from '../common/Location';
import LoginForm from '../auth/LoginForm';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLocation, setUserLocation] = useState('Select location');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  
  const accountDropdownRef = useRef(null);

  // Handle search functionality
  const handleSearch = (query) => {
    // This would typically make an API call to get search results
    console.log('Searching for:', query);
    
    // Mock search results for demonstration
    const mockResults = [
      { id: 1, name: 'Pizza' },
      { id: 2, name: 'Burger' },
      { id: 3, name: 'Sushi' }
    ].filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    
    setSearchResults(mockResults);
    setShowSearchResults(true);
  };

  // Handle location selection
  const handleLocationSelect = (location) => {
    setUserLocation(location);
    // You might want to store this in localStorage or context for persistence
    localStorage.setItem('userLocation', location);
    setIsLocationModalOpen(false);
  };

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  // Toggle account dropdown
  const toggleAccountDropdown = (e) => {
    e.stopPropagation();
    setAccountDropdownOpen(!accountDropdownOpen);
  };

  // Close account dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setAccountDropdownOpen(false);
      }
      setShowSearchResults(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Load location from localStorage on initial render
  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setUserLocation(savedLocation);
    }

    // Check if user is logged in (you might use a token or other auth method)
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    setAccountDropdownOpen(false);
  };

  return (
    <header className="bg-red-600 text-white p-4 shadow-md">
      <div className="container mx-auto">
        {/* Main navbar section */}
        <div className="flex items-center justify-between">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            {/* Mobile menu toggle button */}
            <button 
              className="md:hidden flex items-center mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            
            <Link to="/" className="text-2xl font-bold text-white mr-6">
              MINUTOS
            </Link>
            
            <button 
              onClick={() => setIsLocationModalOpen(true)}
              className="hidden md:flex items-center text-sm text-white hover:text-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="mr-1">{userLocation}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-grow mx-8 relative" onClick={(e) => e.stopPropagation()}>
            <SearchBar onSearch={handleSearch} placeholder="Search for food, groceries, etc." />
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                <ul className="py-1">
                  {searchResults.map((result) => (
                    <li key={result.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800">
                      {result.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* User actions - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {isLoggedIn ? (
              <div className="relative" ref={accountDropdownRef}>
                <button 
                  className="flex items-center text-white hover:text-gray-200"
                  onClick={toggleAccountDropdown}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Account</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown menu */}
                {accountDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                    <Link to="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Orders</Link>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginModalOpen(true)} 
                className="flex items-center text-white hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Login</span>
              </button>
            )}
            
            <Link to="/cart" className="flex items-center text-white hover:text-gray-200">
              <span className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </span>
              <span className="ml-1">Cart</span>
            </Link>
          </div>

          {/* Mobile Cart Button */}
          <Link to="/cart" className="md:hidden flex items-center text-white hover:text-gray-200">
            <span className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </span>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-red-700 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <SearchBar onSearch={handleSearch} placeholder="Search for food, groceries, etc." />
                
                {/* Search Results Dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                    <ul className="py-1">
                      {searchResults.map((result) => (
                        <li key={result.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800">
                          {result.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Mobile Location */}
              <button 
                onClick={() => setIsLocationModalOpen(true)}
                className="flex items-center text-sm text-white hover:text-gray-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{userLocation}</span>
              </button>

              {/* Mobile Account Actions */}
              {isLoggedIn ? (
                <div className="flex flex-col space-y-2">
                  <div className="font-medium border-b border-red-500 pb-2 text-white">Account</div>
                  <Link to="/profile" className="text-white hover:text-gray-200 py-1">Profile</Link>
                  <Link to="/orders" className="text-white hover:text-gray-200 py-1">Orders</Link>
                  <button 
                    onClick={handleLogout}
                    className="text-left text-white hover:text-gray-200 py-1"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)} 
                  className="flex items-center text-white hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Login</span>
                </button>
              )}

              {/* Mobile Cart Link (Full Width) */}
              <Link to="/cart" className="flex items-center text-white hover:text-gray-200">
                <span className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </span>
                <span>Cart</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Location Modal */}
      <Location 
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onSelectLocation={handleLocationSelect}
      />

      {/* Login Modal Popup */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 relative">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsLoginModalOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* Login Form Component */}
            <LoginForm onSuccess={handleLoginSuccess} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;