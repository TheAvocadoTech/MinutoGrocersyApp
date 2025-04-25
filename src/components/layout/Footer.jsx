import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 border-t">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand and Social Column */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-red-500">MINUTOS</span>
            </Link>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Company # 490039-445, Registered with House of companies.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                © 2025 Minutos Technologies Pvt.Ltd. All Rights Reserved.
              </p>
            </div>
          </div>
          
          {/* Navigation Links Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-800 mb-2">Quick Links</h3>
            <Link to="/" className="text-gray-600 hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link to="/category" className="text-gray-600 hover:text-red-500 transition-colors">
              Category
            </Link>
            <Link to="/delivery-areas" className="text-gray-600 hover:text-red-500 transition-colors">
              Delivery Areas
            </Link>
            <Link to="/careers" className="text-gray-600 hover:text-red-500 transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-red-500 transition-colors">
              Contact Us
            </Link>
            <Link to="/join" className="text-gray-600 hover:text-red-500 transition-colors">
              Join us
            </Link>
          </div>
          
          {/* Legal Links Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-800 mb-2">Legal</h3>
            <Link to="/privacy-policy" className="text-gray-600 hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-red-500 transition-colors">
              Terms and Conditions
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-red-500 transition-colors">
              Pricing
            </Link>
            <Link to="/return-and-refund-policy" className="text-gray-600 hover:text-red-500 transition-colors">
              Return & Refund Policy
            </Link>
            <Link to="/faq" className="text-gray-600 hover:text-red-500 transition-colors">
              FAQs
            </Link>
            <Link to="/cookies" className="text-gray-600 hover:text-red-500 transition-colors">
              Cookie Policy
            </Link>
            <Link to="/modern-slavery" className="text-gray-600 hover:text-red-500 transition-colors">
              Modern Slavery Statement
            </Link>
          </div>
          
          {/* Newsletter & App Download Column */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Get Exclusive Deals</h3>
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="youremail@gmail.com" 
                  className="px-4 py-2 border border-gray-300 rounded-lg sm:rounded-r-none w-full mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg sm:rounded-l-none font-medium hover:bg-red-600 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs mt-2 text-gray-500">
                We won't spam, read our <Link to="/privacy-policy" className="text-blue-600 hover:underline">email policy</Link>
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Download App</h3>
              <div className="flex flex-col space-y-3">
                <a href="https://apps.apple.com" className="block">
                  <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg w-full py-2 px-4 text-left hover:bg-gray-50 transition-colors">
                    <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.0378 12.5684C17.0378 9.51855 19.5342 8.08301 19.6309 8.01855C18.1826 5.9082 15.8615 5.58301 14.9867 5.55176C12.9867 5.34668 11.0488 6.7041 10.0293 6.7041C8.98633 6.7041 7.39746 5.57617 5.72559 5.61035C3.57129 5.64453 1.55957 6.89746 0.462891 8.84668C-1.75488 12.7998 -0.0761719 18.7529 2.05371 22.0371C3.13184 23.6494 4.38477 25.4541 6.0293 25.3867C7.63184 25.3135 8.23926 24.3584 10.166 24.3584C12.0723 24.3584 12.6455 25.3867 14.3213 25.3486C16.0488 25.3135 17.1172 23.7217 18.1582 22.0996C19.4014 20.2686 19.9131 18.4688 19.9365 18.3955C19.8896 18.3809 17.0293 17.3223 17.0378 12.5684Z" transform="scale(0.9)" />
                      <path d="M13.9141 4.23047C14.7852 3.17969 15.3721 1.7334 15.2041 0.263672C13.9473 0.322266 12.3799 1.11523 11.4775 2.1416C10.6689 3.05566 9.96289 4.54785 10.1543 5.9834C11.5615 6.09277 13.0156 5.27441 13.9141 4.23047Z" transform="scale(0.9)" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs">Get it on</span>
                      <span className="text-sm font-semibold">App Store</span>
                    </div>
                  </button>
                </a>
                <a href="https://play.google.com" className="block">
                  <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg w-full py-2 px-4 text-left hover:bg-gray-50 transition-colors">
                    <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.18359 1.98047C2.91016 2.26562 2.77344 2.69531 2.77344 3.25391V20.7441C2.77344 21.3027 2.91016 21.7324 3.18359 22.0176L3.26953 22.0938L13.1934 12.168V12.0703L3.26953 2.14453L3.18359 1.98047Z" transform="scale(0.9)" />
                      <path d="M17.0742 16.0625L13.1934 12.168V12.0703L17.0742 8.17578L17.1797 8.23828L21.7969 10.8125C23.0078 11.5039 23.0078 12.7344 21.7969 13.4355L17.1797 16.0098L17.0742 16.0625Z" transform="scale(0.9)" />
                      <path d="M17.1797 16.0098L13.1934 12.1191L3.18359 22.0176C3.63672 22.5 4.34766 22.5527 5.16797 22.0801L17.1797 16.0098Z" transform="scale(0.9)" />
                      <path d="M17.1797 8.23828L5.16797 2.16797C4.34766 1.69531 3.63672 1.74805 3.18359 2.23047L13.1934 12.1191L17.1797 8.23828Z" transform="scale(0.9)" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs">Get it on</span>
                      <span className="text-sm font-semibold">Google Play</span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Additional Links */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">Minutos Copyright 2025. All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-red-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-red-500 transition-colors">Terms</Link>
              <Link to="/pricing" className="text-sm text-gray-600 hover:text-red-500 transition-colors">Pricing</Link>
              <Link to="/do-not-sell" className="text-sm text-gray-600 hover:text-red-500 transition-colors">Do not sell my information</Link>
              <Link to="/feedback" className="text-sm text-gray-600 hover:text-red-500 transition-colors">Feedback & Complaints</Link>
            </div>
          </div>
          
          {/* Important Business Links */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/help" className="text-sm text-gray-600 hover:text-red-500 transition-colors">
                Get help
              </Link>
              <Link to="/add-restaurant" className="text-sm text-gray-600 hover:text-red-500 transition-colors">
                Add your restaurant
              </Link>
              <Link to="/signup-deliver" className="text-sm text-gray-600 hover:text-red-500 transition-colors">
                Sign up to deliver
              </Link>
              <Link to="/business" className="text-sm text-gray-600 hover:text-red-500 transition-colors">
                Create a business account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;