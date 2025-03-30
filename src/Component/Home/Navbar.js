import React, { useState, useEffect, useCallback } from "react";
import { 
  Search, 
  ShoppingCart, 
  Home, 
  Grid, 
  Utensils, 
  Menu, 
  MapPin, 
  User 
} from "lucide-react";
import LoginModal from "./Login";

const Navbar = () => {
  // State management
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [currentLocation, setCurrentLocation] = useState({ name: "Select Location", id: "" });
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  // Sample locations - in a real app, these would come from an API or context
  const locations = [
    { name: "New York", id: "ny" },
    { name: "Los Angeles", id: "la" },
    { name: "Chicago", id: "chi" },
    { name: "Miami", id: "mia" }
  ];

  // Memoized scroll handler to improve performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Load cart items from localStorage or context in a real app
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(parseInt(storedCartItems));
    }
    
    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowMobileSearch(false);
  }, [window.location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Trim and validate search query
    const trimmedQuery = searchQuery.trim();
    
    if (trimmedQuery) {
      // Redirect to search page with query parameter
      window.location.href = `/search-page?query=${encodeURIComponent(trimmedQuery)}`;
      
      // Close mobile search if open
      setShowMobileSearch(false);
      
      // Optional: Store recent searches (you could implement this with localStorage)
      const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      if (!recentSearches.includes(trimmedQuery)) {
        const updatedSearches = [trimmedQuery, ...recentSearches].slice(0, 5);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      }
    }
  };

  const selectLocation = (location) => {
    setCurrentLocation(location);
    setShowLocationDropdown(false);
    // In a real app, you might store this in localStorage or context
    localStorage.setItem("userLocation", JSON.stringify(location));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (showMobileSearch) setShowMobileSearch(false);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  

  return (
    <>
      {/* Mobile View */}
      <div className="block md:hidden sticky inset-x-0 z-50">
        {/* Top Search Bar & Logo */}
        <div className="bg-red-500 p-4 shadow-sm text-white">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-5">
              <img 
                src="https://www.minutos.in/_next/image?url=%2Fimages%2Fminitos-White.png&w=128&q=75" 
                alt="Minutos Logo" 
                className="mr-2" 
                width={80} 
                height={40}
              />
            </a>
            <form onSubmit={handleSearch} className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for 'chocolate box'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  aria-label="Submit search"
                >
                  <Search size={18} className="text-white" />
                </button>
              </div>
            </form>
          </div>

          {/* Category Quick Links */}
          <div className="mt-4 flex space-x-3 overflow-x-auto pb-2">
            {/* Add category icons/links here */}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white border-t py-2">
          <div className="flex justify-around items-center">
            {[
              { href: "/", icon: <Home size={20} />, label: "Home" },
              { href: "/categories", icon: <Grid size={20} />, label: "Categories" },
              { 
                href: "/cart", 
                icon: <Utensils size={20} />, 
                label: "Cart",
              },
              { href: "/profile", icon: <ShoppingCart size={20} />, label: "Profile", showCounter: true }
            ].map(({ href, icon, label, showCounter }) => (
              <a 
                key={href}
                href={href} 
                className="flex flex-col items-center text-xs text-white relative"
              >
                {icon}
                {showCounter && cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <header
        className={`hidden md:block fixed top-0 left-0 w-full px-4 sm:px-6 py-3 z-50 transition-all duration-300 ${
          isScrolled ? "bg-red-500 shadow-md" : "bg-red-500"
        }`}
      >
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center">
            <button 
              className="mr-2 md:hidden" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} className="text-white" />
            </button>
            
            <a href="/" className="flex items-center space-x-5">
              <img src="https://www.minutos.in/_next/image?url=%2Fimages%2Fminitos-White.png&w=128&q=75" alt="Minutos Logo" width={100} height={100} />
            </a>
          </div>
          
          {/* Location Selector - Desktop */}
          <div className="hidden md:flex relative ml-6">
            <button 
              className="flex items-center text-white hover:text-white"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{currentLocation.name}</span>
            </button>
            
            {/* Location dropdown */}
            {showLocationDropdown && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => selectLocation(location)}
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-grow max-w-8xl mx-4 rounded-lg">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder='Search for "Rice"'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Submit search"
              >
                <Search size={18} className="text-white" />
              </button>
            </form>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Mobile Search Toggle Button */}
            <button 
              className="md:hidden text-white" 
              onClick={toggleMobileSearch}
              aria-label="Toggle search"
            >
              <Search size={20} />
            </button>
            
            {/* Login Button - Desktop */}
            <button 
              onClick={openLoginModal}
              className="hidden md:flex items-center text-white hover:text-white font-medium"
              aria-label="Login"
            >
              <User size={18} className="mr-1" />
              <span>Login</span>
            </button>
            
            {/* Profile Button - Desktop */}
            <a 
              href="/profile" 
              className="hidden md:flex items-center text-white hover:text-white font-medium"
              aria-label="Profile"
            >
              <User size={18} className="mr-1" />
              <span>Profile</span>
            </a>
            
            {/* Cart Button with counter */}
            <a 
              href="/cart" 
              className="relative flex items-center text-white hover:text-white font-medium"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
              <span className="hidden sm:inline ml-1">Cart</span>
            </a>
          </div>
        </div>
        
        {/* Mobile Search Bar - Expandable in Navbar */}
        {showMobileSearch && (
          <div className="md:hidden mt-3 pb-2">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none"
                aria-label="Search products"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Submit search"
              >
                <Search size={18} className="text-white" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 pb-6">
          {/* Placeholder for mobile menu content */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            {/* Add mobile menu items here */}
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
