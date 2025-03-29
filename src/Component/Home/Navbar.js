import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scrolls to top when pathname changes

  const topRightItems = [
    'Internship', 'Case Study', 'Gallery', 'Blog', 
    'Free Download', 'Support Ticket', 'Login'
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="sticky w-full z-50">
      {/* White Top Header */}
      <div className="hidden md:block bg-white text-gray-700 py-2">
        <div className="container mx-auto flex justify-end space-x-4 text-sm px-4">
          {topRightItems.map((item) => (
            <a key={item} href="#" className="hover:text-blue-600 text-md transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Blue Gradient Navbar */}
      <nav className="bg-black text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <img src="/logo2.png" alt="Logo" className="h-24 w-36" />
            <span className="font-bold text-3xl">Tesod Technology</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ name, path }) => (
              <Link key={name} to={path} className="hover:text-blue-200 transition-colors">
                {name}
              </Link>
            ))}
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors font-semibold">
              Get Free Quotation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="px-4 pt-2 pb-4 space-y-4">
              {navItems.map(({ name, path }) => (
                <Link 
                  key={name} 
                  to={path} 
                  className="block text-white hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {name}
                </Link>
              ))}
              <button className="w-full bg-white text-blue-600 px-4 py-2 rounded mt-4">
                Get Free Quotation
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
